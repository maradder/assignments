let number = [2,8,10,5,4]
function largest(number){
    let maximum = number[0];
    for (var i=1; i<number.length;i++){
        if (number[i]>maximum){
            maximum = number[i];
    }    
}
return maximum;
}
console.log(largest(number))