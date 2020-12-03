function mapOfCPUUtilization_Average(){
    //emit('CPUUtilization_Average', parseInt(this.CPUUtilization_Average));
    var key = "";
    if(this.CPUUtilization_Average <= 10)
    {
        key = "Range: [0, 10]";
    }
    else if(this.CPUUtilization_Average <= 20)
    {
        key = "Range: [0, 10]";
    }

        emit(parseInt(this.CPUUtilization_Average) % 10, parseFloat(this.MemoryUtilization_Average));
    
}