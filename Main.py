import pymongo
import json
from bson.code import Code
from bson.son import SON
import os
import csv
from datetime import datetime

def printResults(result):
    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    for i in result.find():
        print("Key: " + str(i['_id']))
        print("Value: ")
        str1 = str(i['value'])
        str1 = str1.replace("{","")
        str1 = str1.replace("}","")
        str1 = str1.replace("'","")
        str1 = str1.replace("counter","Number Of Times Reducer Ran")
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



client = pymongo.MongoClient("mongodb+srv://user:password@mapreduce.k9wk8.mongodb.net/test?retryWrites=true&w=majority")
db = client["Workload"]
col1 = db["DVD-testing"]
col2 = db["DVD-training"]
col = db["Dell-DVD-Datasets"]

mapOfCPU = Code(open('mapOfCPU.js', 'r').read())

reduceValues = Code(open('reduce.js', 'r').read())

finalizeValue = Code(open('finalize.js', 'r').read())

while(True):
    while(True):
        print('Choose The Workload Data Set: \n1: DVD-Testing\n2: DVD-Training \n3: Both Combined (Training+Testing)'
        '\n4: Exit ')
        inp = input()
        if(inp == '1' or inp == '2' or inp == '3' or inp == '4'):
            break
        
    if(inp == '1'):
        result = col1.map_reduce(mapOfCPU, reduceValues, 'result', finalize=finalizeValue)
    elif(inp == '2'):
        result = col2.map_reduce(mapOfCPU, reduceValues, 'result', finalize=finalizeValue)
    elif(inp == '3'):
        result = col.map_reduce(mapOfCPU, reduceValues, 'result', finalize=finalizeValue)
    elif(inp == '4'):
        break

    printResults(result)


