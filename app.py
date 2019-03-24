from flask import Flask, jsonify, request, render_template
from slackclient import SlackClient
import json

# Create the Flask application
app = Flask(__name__)

# Used to fetch the bots in the Slack workspace
slack_client = SlackClient("xoxb-570510160706-571581066423-8HOBHXEPfDrlgHAigV3A6MzJ")

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