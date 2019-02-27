from flask import render_template, jsonify, request, make_response, send_from_directory
from app import app

@app.route('/')
@app.route('/index')
def index():
    return render_template('samplelayout.html', title = 'Index')
@app.route('/menu')
def menu():
    restuarant = {'name': 'Tasty Foods'}
    return render_template('menu.html', title = 'Menu', restuarant = restuarant)
@app.route('/queue')
def queue():
    return render_template('queue.html', title = 'Queue')
@app.route('/admin')
def admin():
    restuarant = {'name': 'Tasty Foods'}
    user = {'username': 'EzOrder'}
    return render_template('admin.html', user = user, 
        title = 'Queue', restuarant = restuarant)
