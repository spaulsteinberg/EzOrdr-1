import os
from bson.objectid import ObjectId
import json
import datetime
from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)

# add mongo to flask so that flask_pymongo connected to db
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config["MONGO_URI"] = "mongodb://localhost:27017/local"
mongo = PyMongo(app)

from app import routes
from app.controllers import *