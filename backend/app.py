from flask import Flask
from flask import request
from magic import svd, sync_data, depickle_matrix, pickle_matrix, recommend, matrix
app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/update", methods=["POST"])
def update():
    if request.method == "POST":
        rating = request.form["rating"]
        uid = 1#request.cookies.get("uid")
        recommend(svd(), uid, None, matrix)
    else:
        abort(401)
    return rating


@app.route("/sync", methods=["GET"])
def sync():
    if request.method == "GET":
        print("do something")
    else:
        abort(401)
    return "getting stuff"