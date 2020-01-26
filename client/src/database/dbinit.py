from pymongo import MongoClient
import datetime
import func.py

client = MongoClient('mongodb+srv://moon-emoji:<password>@cluster0-wyzvi.mongodb.net/test?retryWrites=true&w=majority')

db = client['moon-emoji']

## https://api.mongodb.com/python/current/tutorial.html ##

#--creating a document--#
def docCreate(breaks24hours, breaks7days, allBreaks, location, breaks)
    can_data = {"Breaks in 24 Hours": breaks24hours, 
                "Breaks in 7 Days": breaks7days,
                "Total Breaks": allBreaks,
                "Location": 