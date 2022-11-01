from email import message
from flask import Flask, jsonify, request
from flask_jwt_extended import jwt_required, JWTManager, create_access_token, get_jwt_identity
from flask_cors import CORS
from dotenv import load_dotenv
import os
from flask_pymongo import PyMongo
from bson import json_util

app = Flask("__name__")

load_dotenv()

app.config['SECRET_KEY'] = "FILL THIS IS LATER"
app.config["MONGO_URI"] = 'mongodb+srv://jakethenapkin:{password}@cluster0.njun9ub.mongodb.net/economics?retryWrites=true&w=majority'.format(password=os.getenv('password'))

mongo = PyMongo(app)

JWTManager(app)

CORS(app)
 

@app.route('/login', methods=['POST'])
def login():
    
    user = request.get_json()
    if 'email' not in user.keys() and 'password' not in user.keys():
        return jsonify(message='missing data'), 400
    email = user['email']
    password = user['password']
    user = mongo.db.user.find_one({'email':email})
    if user == None:
        return jsonify(message="user does not exist"), 400
    if user['password'] != password:
        return jsonify(message='Incorrect password'), 401
    token = create_access_token(email)
    return jsonify(message='Successfully logged in', token=token), 200


@app.route('/home', methods=['GET'])
@jwt_required()
def home():
    print("TESTING THIS ENDPOINT")
    email = get_jwt_identity()
    print(email)
    user = mongo.db.user.find_one({"email":email})
    user = json_util.dumps(user)
    return jsonify(user=user), 200

if __name__ == "__main__":
    app.run(debug=True, port=5000)
