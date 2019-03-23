#Run this before commit (Windows Devs)
import os
import subprocess
import time

CURRENT_DIRECTORY = os.getcwd()
directories = os.listdir(CURRENT_DIRECTORY)
NON_ANGULAR_DIRS = ['static', 'templates', 'venv']

ANGULAR_PROJECT_PATH = 'frontend'
DIST_PATH = 'frontend/dist/frontend'

FLASK_STATIC_PATH = os.path.join(CURRENT_DIRECTORY, 'static')
FLASK_TEMPLATES_PATH = os.path.join(CURRENT_DIRECTORY, 'templates')

subprocess.call(('cd ' + ANGULAR_PROJECT_PATH + ' && ng build --base-href /static/'), shell=True)

try:
    files = os.listdir(DIST_PATH)
    static_files = []
    html_files = []
    for file in files:
        if '.js' in file or '.js.map' in file or '.ico' in file:
            static_files.append(file)
        if '.html' in file:
            html_files.append(file)
    if len(static_files) > 0:
        for stat in static_files:
            subprocess.call(('cd ' + DIST_PATH + ' &&' + ' move ' + stat + " " + FLASK_STATIC_PATH), shell=True)

    if len(html_files) > 0:
        for html in html_files:
            subprocess.call(('cd ' + DIST_PATH + ' &&' + ' move ' + html + " " + FLASK_TEMPLATES_PATH), shell=True)
except Exception as e:
    print(e)