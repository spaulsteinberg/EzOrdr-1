import os
import json
import datetime
from bson.objectid import ObjectId
from flask import Flask
from flask_pymongo import pymongo

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        if isinstance(o, datetime.datetime):
            return str(o)
    return json.JSONEncoder.default(self, o)

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

app.config['MONGO_URI'] = os.environ.get('DB')
mongo = pymongo(app)

app.json_encoder = json_encoder

from app.controllers import *
from app import routes