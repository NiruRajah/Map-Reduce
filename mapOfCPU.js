function mapOfCPU()
{
    
    var key = "";
    
    if(parseInt(this.CPUUtilization_Average) >= 0 && parseInt(this.CPUUtilization_Average) <= 10)
    {
        key = "[1, 10]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 10 && parseInt(this.CPUUtilization_Average) <= 20)
    {
        key = "[10, 20]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 20 && parseInt(this.CPUUtilization_Average) <= 30)
    {
        key = "[20, 30]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 30 && parseInt(this.CPUUtilization_Average) <= 40)
    {
        key = "[30, 40]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 40 && parseInt(this.CPUUtilization_Average) <= 50)
    {
        key = "[40, 50]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 50 && parseInt(this.CPUUtilization_Average) <= 60)
    {
        key = "[50, 60]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 60 && parseInt(this.CPUUtilization_Average) <= 70)
    {
        key = "[60, 70]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 70 && parseInt(this.CPUUtilization_Average) <= 80)
    {
        key = "[70, 80]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 80 && parseInt(this.CPUUtilization_Average) <= 90)
    {
        key = "[80, 90]";
    }
    else if(parseInt(this.CPUUtilization_Average) > 90 && parseInt(this.CPUUtilization_Average) <= 100)
    {
        key = "[90, 100]";
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