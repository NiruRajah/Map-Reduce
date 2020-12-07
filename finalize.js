function finalize(key, valueObject) 
{
    valueObject.populationStandardDeviation = Math.sqrt(valueObject.sumOfNumberMinusMeanSquared/valueObject.count);
    
    valueObject.sampleStandardDeviation = Math.sqrt(valueObject.sumOfNumberMinusMeanSquared/(valueObject.count - 1));
    
    delete valueObject.sum;

    delete valueObject.sumOfNumberMinusMeanSquared;
    
	return valueObject;
}