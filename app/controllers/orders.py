''' controller and routes for orders '''
import os
import json
from flask import request, jsonify,send_from_directory
from app import app, mongo
from bson.json_util import dumps, RELAXED_JSON_OPTIONS


@app.route('/orders', methods=['GET', 'POST', 'DELETE', 'PATCH'])
def user():
    if request.method == 'GET':
        data = mongo.db.orders.find({"order":"active"})
        return dumps(data, json_options=RELAXED_JSON_OPTIONS), 200

    data = request.get_json()
    if request.method == 'POST':
            mongo.db.orders.insert_one(data)
            return jsonify({'ok': True, 'message': 'orders created successfully!'}), 200

    if request.method == 'DELETE':
        if data.get('orders', None) is not None:
            db_response = mongo.db.orders.delete_one({'orders': data['orders']})
            if db_response.deleted_count == 1:
                response = {'ok': True, 'message': 'record deleted'}
            else:
                response = {'ok': True, 'message': 'no record found'}
            return jsonify(response), 200
        else:
            return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400

    if request.method == 'PATCH':
        if data.get('query', {}) != {}:
            mongo.db.orders.update_one(
                data['query'], {'$set': data.get('payload', {})})
            return jsonify({'ok': True, 'message': 'record updated'}), 200
        else:
            return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')