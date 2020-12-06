import pymongo
import json
from bson.code import Code
from bson.son import SON
import os
import csv
from datetime import datetime

client = pymongo.MongoClient("mongodb+srv://Nirusan:CloudProject@mapreduce.k9wk8.mongodb.net/test?retryWrites=true&w=majority")
db = client["Workload"]
col1 = db["DVD-testing"]
col2 = db["DVD-training"]
col = db["Dell-DVD-Datasets"]

mapOfCPU = Code(open('mapOfCPU.js', 'r').read())

finalizeForAverage = Code(open('finalizeForAverage.js', 'r').read())

reduceForNumberOfSamples = Code(open('reduceForNumberOfSamples.js', 'r').read())

reduceValues = Code(open('reduce.js', 'r').read())

finalizeValue = Code(open('finalize.js', 'r').read())

result = col.map_reduce(mapOfCPU, reduceValues, 'result', finalize=finalizeValue)
for i in result.find():
    print(i)

