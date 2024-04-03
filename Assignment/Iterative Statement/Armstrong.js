var a = 0;
var b = 121;
var c = b;
while (c > 0) {
    var n = c % 10;
    a += n * n * n;
    c = parseInt(c / 10); //The parseInt() function parses a string and returns an integer.
}
if (a == b){
    console.log(`${b} is an Armstrong number.`);
}
else {
    console.log(`${b} is not an Armstrong number.`);
}