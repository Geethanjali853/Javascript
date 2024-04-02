let a = 123456789;
let b = 0;
while (a > 0) {
    c = a % 10;
    b = b * 10 + c;
    a = Math.floor(a / 10); //math.floor() - returns the largest integer less than or equal to a given number. It basically rounds down a number to its nearest integer.
}
console.log("Reversed number is : " + b)