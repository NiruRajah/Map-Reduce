function finalizeForAverage(key, reducedVal){
    reducedVal.avg = reducedVal.MemoryUtilization_Average/reducedVal.count;
    

    return reducedVal;

}