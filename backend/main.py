'''
	This file contains RESTful API endpoints that the frontend will use.
	Author: Chris Carrillo
	Date: 1/21/2019
'''

from flask import Flask, jsonify, request


import json

# Create the Flask application
app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/' # Used to encrypt/decrypt the cookie

@app.route('/api/getSession')
def get_session():
	pass
