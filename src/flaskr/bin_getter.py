from bson.objectid import ObjectId
from flask import Flask
from flask_cors import CORS, cross_origin
from pymongo import MongoClient

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

client = MongoClient('mongodb+srv://moon-emoji:moonemojiftw123@cluster0-wyzvi.mongodb.net/test?retryWrites=true&w=majority')
db = client["moon-emoji"]

@app.route('/')
def index():
    return "index"

@app.route('/all')
def get_all_cans():
    return None

@app.route('/<id>')
def get_can(id):
    can = db.can_datas.find_one({"_id": ObjectId(id)})
    can = {
        "Total Breaks" : can["Total Breaks"],
        "Breaks" : can["Breaks"],
        "Full" : can["Full"],
        "Empties" : can["Empties"],
        "Location" : can["Location"]
    }
    return can