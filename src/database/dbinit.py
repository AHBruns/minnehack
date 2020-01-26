from pymongo import MongoClient
import datetime
from bin.py import bin

client = MongoClient('mongodb+srv://moon-emoji:moonemojiftw123@cluster0-wyzvi.mongodb.net/test?retryWrites=true&w=majority')

db = client['moon-emoji']

## https://api.mongodb.com/python/current/tutorial.html ##

#--creating a document--#
can_data = {
            "Breaks in 24 Hours": 23, 
            "Breaks in 7 Days": 147,
            "Total Breaks": 23460,
            "Location": [44.9731, 93.2354],
            "Breaks": [(1244534, 300), (1244534, 256)]
            }

can_datas = db.can_datas
can_data_id = can_datas.insert_one(can_data).inserted_id



