'''
	This file contains RESTful API endpoints that the frontend will use.

	Author: Chris Carrillo
	Date: 1/21/2019
'''

from flask_cors import CORS
from flask import Flask, jsonify, request
from flask_bcrypt import Bcrypt

from .entities.database import Session, engine, Base
from .entities.user import User, UserSchema
from .entities.procedure import Procedure, ProcedureSchema

import json
import uuid

# Create the Flask application
app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt()

# Generate database schema
Base.metadata.create_all(engine)

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
	first_object = session.query(User).filter(User.email == "" + email + "").first()

	schema = UserSchema()
	user = schema.dump(first_object)
	
	session.close()
	
	return jsonify(user.data)

@app.route('/api/procedures', methods=['POST'])
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
	posted_email = request.json['email']
	posted_password = request.json['password']

	user_json = get_user_by_email(posted_email)

	try:
		if not bcrypt.check_password_hash(user_json.get_json()['password'], posted_password): # The password was incorrect
			return jsonify(success=False, message='The password is incorrect')
		else: # The login was successful, so pass in all user credentials (except password)
			return jsonify(
				success=True,
				user_id=user_json.get_json()['user_id'],
				email=user_json.get_json()['email'],
				first_name=user_json.get_json()['first_name'],
				last_name=user_json.get_json()['last_name'],
				password=user_json.get_json()['password']
				)
	except KeyError: # A KeyError is only thrown if the user does not exist
		return jsonify(success=False, message='A user with that email does not exist')

@app.route('/api/register', methods=['POST'])
def register():
	# Force formatting on the values given
	posted_first_name = request.json['first_name']
	posted_last_name = request.json['last_name']
	posted_email = request.json['email']
	posted_password = bcrypt.generate_password_hash(request.json['password']).decode('utf-8')

	# Insert the user into the database
	session = Session()
	user_to_add = User(uuid.uuid4(), posted_email, posted_first_name, posted_last_name, posted_password)
	session.add(user_to_add)
	session.commit()
	session.close()