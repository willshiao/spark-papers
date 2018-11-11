from flask import Flask
from flask import request
from magic import svd, sync_data
app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/update", methods=["POST"])
def update():
    if request.method == "POST":
        rating = request.form["rating"]
        uid = request.cookies.get("uid")
        svd()
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