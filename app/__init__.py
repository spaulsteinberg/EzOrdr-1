import os
import json
import datetime
from bson import ObjectId
from flask import Flask
from flask_pymongo import PyMongo

class myJSONEncoder(json.JSONEncoder):
    def default(self, o): # pylint: disable=E0202
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

app = Flask(__name__)

# add mongo to flask so that flask_pymongo connected to db
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config["MONGO_URI"] = "mongodb://localhost:27017/local"
mongo = PyMongo(app)

app.json_encoder = myJSONEncoder

from app import routes
from app.controllers import *