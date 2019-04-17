from flask import Flask, jsonify, request, render_template
from slackclient import SlackClient
from os import environ
import json

# Create the Flask application
app = Flask(__name__)

slack_token = environ.get('SLACK_TOKEN')

# Used to fetch the bots in the Slack workspace
slack_client = SlackClient(slack_token)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/get_robots')
def get_robots():
    user_list = slack_client.api_call("users.list")
    bots = []
    for user in user_list.get('members'):
        if user.get('is_bot'):
            bots.append(user)
    return jsonify(bots)