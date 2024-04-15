var givenArr = [2, 4, 5, 2, 3, 5, 1, 2, 4];

function indexOfRepeatedValue(arr) {
    let firstIndex;
    let s = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (s.has(arr[i]))             { //The place where I clearly miss something
            firstIndex = arr.indexOf(arr[i]);
        break;
    } 
    else {
        s.add(arr[i])
         }
    }
    return firstIndex;
}
console.log(indexOfRepeatedValue(givenArr));