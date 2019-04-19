''' controller and routes for orders '''
import os
import json
import bson
from flask import request, jsonify,send_from_directory
from app import app, mongo
from bson.json_util import dumps, RELAXED_JSON_OPTIONS


@app.route('/orders', methods=['GET', 'POST', 'PUT'])
def user():
    if request.method == 'GET':
        data = mongo.db.orders.find({"order":"active"})
        return dumps(data, json_options=RELAXED_JSON_OPTIONS), 200

    data = request.get_json()
    if request.method == 'POST':
            mongo.db.orders.insert_one(data)
            return jsonify({'ok': True, 'message': 'orders created successfully!'}), 200

    if request.method == 'PUT':
        new_arr = data
        new_arr = (bson.objectid.ObjectId(data))
        mongo.db.orders.update_many(
           {'_id': {'$eq' : new_arr} },
           {'$set': {"order" : "inactive"}}
        )
        response = {'ok': True, 'message': 'Order was successfully removed'}
        return jsonify(response), 200
    else:
        response = {'ok': True, 'message': 'no record found'}
        return jsonify(response), 200

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico', mimetype='image/vnd.microsoft.icon')