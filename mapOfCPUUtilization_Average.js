function mapOfCPUUtilization_Average(){
    //emit('CPUUtilization_Average', parseInt(this.CPUUtilization_Average));
    var key = "";
    if(this.CPUUtilization_Average <= 10)
    {
        key = "Range: [0, 10]";
    }
    else if(this.CPUUtilization_Average > 10 && this.CPUUtilization_Average <= 20)
    {
        key = "Range: (10, 20]";
    }
    else if(this.CPUUtilization_Average > 20 && this.CPUUtilization_Average <= 30)
    {
        key = "Range: (20, 30]";
    }
    else if(this.CPUUtilization_Average > 30 && this.CPUUtilization_Average <= 40)
    {
        key = "Range: (30, 40]";
    }
    else if(this.CPUUtilization_Average > 40 && this.CPUUtilization_Average <= 50)
    {
        key = "Range: (40, 50]";
    }
    else if(this.CPUUtilization_Average > 50 && this.CPUUtilization_Average <= 60)
    {
        key = "Range: (50, 60]";
    }
    else if(this.CPUUtilization_Average > 60 && this.CPUUtilization_Average <= 70)
    {
        key = "Range: [60, 70]";
    }
    else if(this.CPUUtilization_Average > 70 && this.CPUUtilization_Average <= 80)
    {
        key = "Range: [70, 80]";
    }
    else if(this.CPUUtilization_Average > 80 && this.CPUUtilization_Average <= 90)
    {
        key = "Range: [80, 90]";
    }
    else if(this.CPUUtilization_Average > 90 && this.CPUUtilization_Average <= 100)
    {
        key = "Range: [90, 100]";
    }

        emit(key, parseFloat(this.MemoryUtilization_Average));
    
}