function reduceForNumberOfSamples(keyRange, valuesObject)
{
    var reducedVal = { count:0, MemoryUtilization_Average:0}
    for(var i = 0; i < valuesObject.length; i++){
        reducedVal.count += valuesObject[i].count;
        reducedVal.MemoryUtilization_Average += (valuesObject[i].MemoryUtilization_Average);
        //reducedVal.MemoryUtilization_Average = valuesObject[i].MemoryUtilization_Average;
    }
    

    return reducedVal;

}