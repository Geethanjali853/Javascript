let a = 123456789;
let b = 0;
while (a > 0) {
    c = a % 10;
    b = b * 10 + c;
    a = Math.floor(a / 10);
}
console.log("Reversed number is : " + b)