from flask import Flask, jsonify, request, render_template
import json

# Create the Flask application
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')