from pymongo import MongoClient
import datetime
client = MongoClient('mongodb+srv://moon-emoji:<password>@cluster0-wyzvi.mongodb.net/test?retryWrites=true&w=majority')

db = client['moon-emoji']

#creating a document

