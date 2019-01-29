'''
	Contains classes necessary for User.

	Author: Chris Carrillo
	Date: 1/12/2019
'''

from marshmallow import Schema, fields
from sqlalchemy import Column, String, Text, Integer
from flask_login import UserMixin

from .database import Base, Session

class User(Base, UserMixin):
	'''
		The User class defines the user object that will be inserted into the database.
		A User has an id, an email, a first_name, a last_name, and a password.
	'''

	__tablename__ = "USER"

	# binary=False falls back to CHAR instead of BINARY
	#user_id = Column(UUIDType(binary=True), primary_key = True)
	id = Column(Integer, primary_key=True)
	email = Column(String(450), unique=True, nullable=False) # Unique constraints have a max of 450 characters
	first_name = Column(String, nullable=False)
	last_name = Column(String, nullable=False)
	password = Column(Text, nullable=False)

	def __init__(self, email, first_name, last_name, password):
		self.email = email
		self.first_name = first_name
		self.last_name = last_name
		self.password = password

class UserSchema(Schema):
	'''
		UserSchema is used to transform instances of User into JSON objects.
	'''

	id = fields.Integer()
	email = fields.Str()
	first_name = fields.Str()
	last_name = fields.Str()
	password = fields.Str()