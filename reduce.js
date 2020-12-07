function reduce(key, valueObjects)
{

	return valueObjects.reduce(function z(previous, current, currentIndex, currentArray) 
	{
		var delta = Math.pow((current.sum/current.count) - (previous.sum/previous.count), 2);
		var weight = (previous.count * current.count)/(previous.count + current.count);

		var medianX = valueObjects[0].median;
		var middle = Math.floor(valueObjects.length/2);
			if(valueObjects.length % 2 != 0)
			{
				medianX = valueObjects[middle].median;
			}
			else
			{
				medianX = (valueObjects[middle - 1].median + valueObjects[middle].median) / 2.0;
			}
		
		return {
			counter: previous.counter + 1,
			count: previous.count + current.count,
			median: medianX,
			sum: previous.sum + current.sum,
			min: Math.min(previous.min, current.min),
			max: Math.max(previous.max, current.max),
			sumOfNumberMinusMeanSquared: previous.sumOfNumberMinusMeanSquared + current.sumOfNumberMinusMeanSquared + delta*weight
		};
	})

}