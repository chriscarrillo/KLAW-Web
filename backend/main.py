'''
	This file demonstrates how to interact with the SQL Server database.

	Author: Chris Carrillo
	Date: 1/12/2019
'''

from flask import Flask, jsonify, request

from .entities.database import Session, engine, Base
from .entities.user import User, UserSchema
from .entities.procedure import Procedure, ProcedureSchema

import uuid

# Create the Flask application
app = Flask(__name__)

# Generate database schema
Base.metadata.create_all(engine)

@app.route("/users")
def getUsers():
	# Fetch the users from the database
	session = Session()
	user_objects = session.query(User).all()

	# Transform the users into JSON-serializable objects
	schema = UserSchema(many = True)
	users = schema.dump(user_objects)

	# Serialize users as JSON
	session.close()
	return jsonify(users.data)

@app.route("/procedures")
def getProcedures():
	# Fetch the procedures from the database
	session = Session()
	procedure_objects = session.query(Procedure).all()

	# Transform the procedures into JSON-serializable objects
	schema = ProcedureSchema(many = True)
	procedures = schema.dump(procedure_objects)

	# Serialize users as JSON
	session.close()
	return jsonify(procedures.data)

@app.route("/users", methods=['POST'])
def addUser():
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

@app.route("/procedures", methods=['POST'])
def addProcedure():
	# Mount procedure object
	posted_procedure = ProcedureSchema(only = ('user_id', 'raw_xml'))\
		.load(request.get_json())

	procedure = Procedure(**posted_procedure.data)

	# Persist procedure
	session = Session()
	session.add(procedures)
	session.commit()

	# Return created procedure
	new_procedure = ProcedureSchema().dump(procedure).data
	session.close()
	return jsonify(new_procedure)