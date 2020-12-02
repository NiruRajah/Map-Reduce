import pymongo
import json
from bson.code import Code
from bson.son import SON
import os
import csv
from datetime import datetime

#client = pymongo.MongoClient("mongodb+srv://Nirusan:CloudProject@mapreduce.k9wk8.mongodb.net/test?retryWrites=true&w=majority")
client = pymongo.MongoClient("mongodb+srv://Nirusan:CloudProject@mapreduce.k9wk8.mongodb.net/test?retryWrites=true&w=majority")
db = client["Workload"]
col1 = db["DVD-testing"]
col2 = db["DVD-training"]
col = db["Dell-DVD-Datasets"]

mapf = Code(open('mapCPU.js', 'r').read())

reduceAvg = Code(open('reduceAvg.js', 'r').read())



result = col.map_reduce(mapf, reduceAvg, 'myresults')
for i in result.find():
    print(i)
