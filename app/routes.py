import os
from flask import render_template, jsonify, request, make_response, send_from_directory
from flask_cors import CORS
from app import app
from flask import send_from_directory

CORS(app)

@app.route('/')
@app.route('/index')
def index():
    return render_template('menu.html', title = 'Menu')
@app.route('/menu')
def menu():
    return render_template('menu.html', title = 'Menu')
@app.route('/queue')
def queue():
    return render_template('queue.html', title = 'Queue')
@app.route('/admin')
def admin():
    restuarant = {'name': 'Tasty Foods'}
    user = {'username': 'EzOrder'}
    return render_template('admin.html', user = user, 
        title = 'Queue', restuarant = restuarant)
