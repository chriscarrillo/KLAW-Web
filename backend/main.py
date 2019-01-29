'''
	This file contains RESTful API endpoints that the frontend will use.

	Author: Chris Carrillo
	Date: 1/21/2019
'''

from flask import Flask, jsonify, request
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_login import LoginManager, login_user, login_required, logout_user, current_user

from .entities.database import Session, engine, Base
from .entities.user import User, UserSchema
from .entities.procedure import Procedure, ProcedureSchema

import json

# Create the Flask application
app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/' # Used to encrypt/decrypt the cookie
CORS(app, supports_credentials=True)
bcrypt = Bcrypt()
login_manager = LoginManager()
login_manager.init_app(app)

# Generate database schema
Base.metadata.create_all(engine)

@login_manager.user_loader
def load_user(user_id):
	return Session().query(User).filter_by(id=user_id).first()

# @login_manager.request_loader
# def load_user_from_request(user_request):
# 	return Session().query(User).filter_by(email=user_request.json['email']).first()

@app.route('/api/users', methods=['POST'])
def get_users():
	# Fetch the users from the database
	session = Session()
	user_objects = session.query(User).all()

	# Transform the users into JSON-serializable objects
	schema = UserSchema(many=True)
	users = schema.dump(user_objects)

	# Serialize users as JSON
	session.close()
	return jsonify(users.data)

@app.route('/api/users/email/<email>', methods=['POST'])
def get_user_by_email(email):
	session = Session()
	db_user = session.query(User).filter(User.email == "" + email + "").first()

	schema = UserSchema()
	user = schema.dump(db_user)
	
	session.close()
	
	return jsonify(user.data)

@app.route('/api/procedures', methods=['POST'])
@login_required
def get_procedures():
	# Fetch the procedures from the database
	session = Session()
	procedure_objects = session.query(Procedure).all()

	# Transform the procedures into JSON-serializable objects
	schema = ProcedureSchema(many=True)
	procedures = schema.dump(procedure_objects)

	# Serialize users as JSON
	session.close()
	return jsonify(procedures.data)

@app.route('/api/users/add', methods=['POST'])
def add_user():
	# Mount User object
	posted_user = UserSchema(only = ('email', 'first_name', 'last_name', 'password'))\
		.load(request.get_json())

	user = User(**posted_user.data)

	# Persist user
	session = Session()
	session.add(user)
	session.commit()

	# Return created user
	new_user = UserSchema().dump(user).data
	session.close()
	return jsonify(new_user)

@app.route('/api/procedures/add', methods=['POST'])
@login_required
def add_procedure():
	# Mount procedure object
	posted_procedure = ProcedureSchema(only = ('user_id', 'raw_xml'))\
		.load(request.get_json())

	procedure = Procedure(**posted_procedure.data)

	# Persist procedure
	session = Session()
	session.add(procedure)
	session.commit()

	# Return created procedure
	new_procedure = ProcedureSchema().dump(procedure).data
	session.close()
	return jsonify(new_procedure)

@app.route('/api/login', methods=['POST'])
def login():
	try:
		posted_email = request.json['email'].lower()
		posted_password = request.json['password']
		user_json = get_user_by_email(posted_email)
		response = jsonify()

		if not bcrypt.check_password_hash(user_json.get_json()['password'], posted_password): # The password was incorrect
			response = jsonify(success=False, message='The password is incorrect')
		else: # The login was successful, so pass in all user credentials (except password)
			# Get user object from the database
			user = load_user(1)
			
			# Login the user
			login_user(user, remember=False, force=True)

			response = jsonify(
				success=True,
				id=user_json.get_json()['id'],
				email=user_json.get_json()['email'],
				first_name=user_json.get_json()['first_name'],
				last_name=user_json.get_json()['last_name'],
				user=current_user.is_authenticated
				)
	except KeyError: # A KeyError is only thrown if the user does not exist
		response = jsonify(success=False, message='A user with that email does not exist')

	return response

@app.route('/api/register', methods=['POST'])
def register():
	# Force formatting on the values given
	posted_first_name = request.json['first_name'].lower().title()
	posted_last_name = request.json['last_name'].lower().title()
	posted_email = request.json['email'].lower()
	posted_password = bcrypt.generate_password_hash(request.json['password']).decode('utf-8')

	# Insert the user into the database
	session = Session()
	user_to_add = User(posted_email, posted_first_name, posted_last_name, posted_password)
	session.add(user_to_add)
	session.commit()
	session.close()

	return jsonify(success=True)

@app.route('/api/logout')
@login_required
def logout():
	logout_user()
	return jsonify(success=True)

@app.route('/api/getSession')
def get_session():
	pass

@app.route('/api/isLoggedIn', methods=['POST'])
def get_is_logged_in():
	return jsonify(success=current_user.is_authenticated)