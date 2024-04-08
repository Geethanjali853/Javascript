function ArrDuplicates(array) {
    var uniqueArr = [];
    for(var i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(array[i]) === -1) {
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr;
}
var arr = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5];
var uniqueArr = ArrDuplicates(arr);
console.log(uniqueArr);