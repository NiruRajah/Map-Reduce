function mapOfCPU()
{
    
    var key = "";
    
    if(parseInt(this.CPUUtilization_Average) >= 0 && parseInt(this.CPUUtilization_Average) <= 10)
    {
        key = "[0, 10]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 10 && parseInt(this.CPUUtilization_Average) <= 20)
    {
        key = "[11, 20]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 20 && parseInt(this.CPUUtilization_Average) <= 30)
    {
        key = "[21, 30]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 30 && parseInt(this.CPUUtilization_Average) <= 40)
    {
        key = "[31, 40]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 40 && parseInt(this.CPUUtilization_Average) <= 50)
    {
        key = "[41, 50]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 50 && parseInt(this.CPUUtilization_Average) <= 60)
    {
        key = "[51, 60]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 60 && parseInt(this.CPUUtilization_Average) <= 70)
    {
        key = "[61, 70]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 70 && parseInt(this.CPUUtilization_Average) <= 80)
    {
        key = "[71, 80]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 80 && parseInt(this.CPUUtilization_Average) <= 90)
    {
        key = "[81, 90]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 90 && parseInt(this.CPUUtilization_Average) <= 100)
    {
        key = "[91, 100]";
    }

    var value = {
                    count: 1,
                    median: parseFloat(this.MemoryUtilization_Average),
                    sum: parseFloat(this.MemoryUtilization_Average),
                    min: parseFloat(this.MemoryUtilization_Average),
                    max: parseFloat(this.MemoryUtilization_Average),
                    sumOfNumberMinusMeanSquared: 0
                };

    emit(key, value);
    
}