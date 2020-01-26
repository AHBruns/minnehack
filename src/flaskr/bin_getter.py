from bson.objectid import ObjectId
from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb+srv://moon-emoji:moonemojiftw123@cluster0-wyzvi.mongodb.net/test?retryWrites=true&w=majority')
db = client["moon-emoji"]
#id = "5e2d14eaa1a3b2634647c92a"

@app.route('/')
def index():
    return "index"

@app.route('/<id>')
def get_bin(id):
    can = db.can_datas.find_one({"_id": ObjectId(id)})
    can = {
        "Breaks in 24 Hours" : can["Breaks in 24 Hours"],
        "Breaks" : can["Breaks"],
        "Breaks in 7 Days" : can["Breaks in 7 Days"],
        "Location" : can["Location"],
        "Empties" : can["Empties"],
        "Total Breaks" : can["Empties"]
    }
    print(can['Breaks in 24 Hours'])
    return can

if __name__=='__main__':
    get_bin()

#lat long breaks (time and time of fall) tot breaks