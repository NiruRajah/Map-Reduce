import pymongo
import json
from bson.code import Code
from bson.son import SON
import os
import csv
from datetime import datetime

client = pymongo.MongoClient("mongodb+srv://user:password@mapreduce.k9wk8.mongodb.net/test?retryWrites=true&w=majority")
db = client["Workload"]
col = db["Dell-DVD-Datasets"]

mapOfCPU = Code(open('mapOfCPU.js', 'r').read())

reduceValues = Code(open('reduce.js', 'r').read())

finalizeValue = Code(open('finalize.js', 'r').read())

result = col.map_reduce(mapOfCPU, reduceValues, 'result', finalize=finalizeValue)

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

for i in result.find():
    print("Key: " + str(i['_id']))
    print("Value: ")
    str1 = str(i['value'])
    str1 = str1.replace("{","")
    str1 = str1.replace("}","")
    str1 = str1.replace("'","")
    str1 = str1.replace("count","Number Of Samples")
    str1 = str1.replace("median","Median")
    str1 = str1.replace("min","Min")
    str1 = str1.replace("max","Max")
    str1 = str1.replace("populationStandardDeviation","Population Standard Deviation")
    str1 = str1.replace("sampleStandardDeviation","Sample Standard Deviation")

    str1 = str1.split(", ")
    for j in str1:
        print("\t" + j)
    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
