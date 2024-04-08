function sumArray(arr) {
    var ourArray = [1, 4, 0, 9, -3];
    var sum = 0;
    for(var i = 0; i < ourArray.length; i += 1) {
        sum += ourArray[i];
    }
    return sum;
}
console.log(sumArray([1, 4, 0, 9, -3]));


/**function sumArray(arr) {
    var ourArray = [1, 4, 0, 9, -3, -10];
    var sum = 0;
    for(var i = 0; i < ourArray.length; i += 1) {
        sum += ourArray[i];
    }
    return sum;
}
console.log(sumArray([1, 4, 0, 9, -3, -10]));**/