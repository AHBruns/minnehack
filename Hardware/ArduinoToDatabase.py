import serial
from datetime import datetime
from bson.objectid import ObjectId

from pymongo import MongoClient

client = MongoClient('mongodb+srv://moon-emoji:moonemojiftw123@cluster0-wyzvi.mongodb.net/test?retryWrites=true&w=majority')
db = client["moon-emoji"]
collection = client.can_datas

arduino = serial.Serial('/dev/cu.usbmodem1421', 9600, timeout=.1)

id = '5e2dd242dc30bbc231aaeafe'
isFull = False
itemCount = 0

#time it took for them to fall, time it happened
break_array = []

while True:
	data = (arduino.readline()[:-2]).decode("utf-8") #the last parts get rid of the new-line chars and decodes bit strings
	if data:
		for i in data.split():
			newItemInfo = []
			if i == "Full.":
				isFull = True
				temp = db.can_datas.find_one({"_id": ObjectId(id)})
				temp["Full"] = True
				db.can_datas.update({"_id": ObjectId(id)}, temp)
			if i == "emptied":
				isFull = False
				now = datetime.now()
				current_time = now.strftime("%H:%M:%S")
				db.can_datas.update({"_id": ObjectId(id)}, {'$push': {'Empties': current_time}})
				temp = db.can_datas.find_one({"_id": ObjectId(id)})
				temp["Full"] = False
				db.can_datas.update({"_id": ObjectId(id)}, temp)
			if i.isdigit() and isFull:
				print("Bin is Full")
				print(itemCount)
			elif i.isdigit() and not isFull:
				now = datetime.now()
				current_time = now.strftime("%H:%M:%S")
				newItemInfo.append(current_time)
				newItemInfo.append(i)
				print("Current Time =", current_time)
				itemCount += 1
				print(i)      #size of item aka time it took to fall past sensor
				# break_array.append(newItemInfo)
				db.can_datas.update({"_id": ObjectId(id)}, {'$push': {'Breaks': newItemInfo}})
				db.can_datas.update_one({"_id": ObjectId(id)}, {'$inc': {'Total Breaks': 1}})
		print(data)
