from email import message
from flask import Flask, jsonify, request
from flask_jwt_extended import jwt_required, JWTManager, create_access_token, get_jwt_identity
from flask_cors import CORS
from dotenv import load_dotenv
import os
from flask_pymongo import PyMongo
from bson import json_util
from newsapi import NewsApiClient
from datetime import date, timedelta

todays_date = date.today()



app = Flask("__name__")

load_dotenv()

newsapi = NewsApiClient(api_key=os.getenv('newsapi'))


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
    user_find = mongo.db.user.find_one({'email':email})
    if user_find == None:
        return jsonify(message="user does not exist"), 400
    if user_find['password'] != password:
        return jsonify(message='Incorrect password'), 401
    token = create_access_token(email)
    return jsonify(message='Successfully logged in', token=token), 200


@app.route('/home', methods=['GET'])
@jwt_required()
def home():
    email = get_jwt_identity()
    user = mongo.db.user.find_one({"email":email})
    if not user:
        return jsonify("Obtaining user failed"), 400
    user["_id"] = str(user['_id'])
    return jsonify(user), 200

@app.route('/news', methods=['GET'])
def news():
    print(todays_date)
    if request.method == "POST":
        return jsonify(message='test post')
    if request.method== 'GET':
        data = request.args.get('headline')
        if data:
            from_date = todays_date - - timedelta(days=10)
            print(from_date)
            all_articles = newsapi.get_everything(q=data, 
                                            from_param=from_date,
                                            to=todays_date,
                                            language='en',
                                            sort_by='relevancy',
                                            page=2)
            articles = all_articles['articles'][0]
            return jsonify(articles=articles), 200
        else: 
            from_date = todays_date - - timedelta(days=10)
            print(from_date)
            all_articles = newsapi.get_everything(q='economics', 
                                            from_param=from_date,
                                            to=todays_date,
                                            language='en',
                                            sort_by='relevancy',
                                            page=2)
            articles = all_articles['articles'][0]
            return jsonify(articles=articles), 200

if __name__ == "__main__":
    app.run(debug=True, port=5000)

    