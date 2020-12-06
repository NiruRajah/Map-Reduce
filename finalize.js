function finalize(key, valueObject) 
{ 
    valueObject.average = valueObject.sum/valueObject.count;
    
    valueObject.populationStandardDeviation = Math.sqrt(valueObject.sumOfNumberMinusMeanSquared/valueObject.count);
    
    valueObject.sampleStandardDeviation = Math.sqrt(valueObject.sumOfNumberMinusMeanSquared/(valueObject.count - 1));
    
    delete valueObject.sumOfNumberMinusMeanSquared;
    
	return valueObject;
}