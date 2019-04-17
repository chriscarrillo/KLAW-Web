from flask import Flask, jsonify, request, render_template
from slackclient import SlackClient
# from boto.s3.connection import S3Connection
import json

# Create the Flask application
app = Flask(__name__)

# Boto connection
# connection = S3Connection(os.environ['S3_KEY'], os.environ['S3_SECRET'])

slack_token = ''

# Used to fetch the bots in the Slack workspace
slack_client = SlackClient("xoxb-570510160706-571581066423-IIS1Ze08CDCgdV1mEf8gS4GI")

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