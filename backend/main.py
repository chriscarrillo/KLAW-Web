'''
	This file contains RESTful API endpoints that the frontend will use.
	Author: Chris Carrillo
	Date: 1/21/2019
'''

from flask import Flask, jsonify, request


import json

# Create the Flask application
app = Flask(__name__)