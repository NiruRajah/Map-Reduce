function reduce(key, valueObjects)
{
	return valueObjects.reduce(function z(previous, current) 
	{
		var delta = previous.sum/previous.count - current.sum/current.count;
		var weight = (previous.count * current.count)/(previous.count + current.count);

		return {
		
			count: previous.count + current.count,
			MemoryUtilization_Average: current.MemoryUtilization_Average,
			sum: previous.sum + current.sum,
			min: Math.min(previous.min, current.min),
			max: Math.max(previous.max, current.max),
			sumOfNumberMinusMeanSquared: previous.sumOfNumberMinusMeanSquared + current.sumOfNumberMinusMeanSquared + delta*delta*weight
		};
	})

}