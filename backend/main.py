'''
	This file demonstrates how to interact with the SQL Server database.

	Author: Chris Carrillo
	Date: 1/12/2019
'''

from flask_cors import CORS
from flask import Flask, jsonify, request

from .entities.database import Session, engine, Base
from .entities.user import User, UserSchema
from .entities.procedure import Procedure, ProcedureSchema

import uuid

# Create the Flask application
app = Flask(__name__)
CORS(app)

# Generate database schema
Base.metadata.create_all(engine)

@app.route('/api/users')
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

@app.route('/api/users/email/<email>')
def get_user_by_email(email):
	session = Session()
	first_object = session.query(User).filter(User.email == '' + email + '').first()

	schema = UserSchema()
	user = schema.dump(first_object)
	
	session.close()
	return jsonify(user.data)

@app.route('/api/procedures')
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