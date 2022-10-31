from email import message
from flask import Flask, jsonify, request
from flask_jwt_extended import jwt_required, JWTManager, create_access_token, get_jwt
from flask_cors import CORS

app = Flask("__name__")

app.config['SECRET_KEY'] = "FILL THIS IS LATER"

JWTManager(app)

CORS(app)

users = [
        {
        'first':'Jacob', 
        'last':"Lapkin",
        'email':'jacobglapkin@gmail.com',
        'password':'testpassword'}
        ]   

@app.route('/login', methods=['POST'])
def login():
    
    user = request.get_json()
    if 'email' not in user.keys() and 'password' not in user.keys():
        return jsonify(message='missing data'), 400
    email = user['email']
    password = user['password']
    token = create_access_token(email)
    return jsonify(message='Successfully logged in', token=token), 200


@app.route('/home', methods=['GET'])
@jwt_required
def home():
    pass

if __name__ == "__main__":
    app.run(debug=True, port=5000)
