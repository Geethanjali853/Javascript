var a = 0;
var b = 153;
var c = b;
while (c > 0) {
    var n = c % 10;
    a += n * n * n;
    c = c / 10;
}
if (a == b){
    console.log(`${b} is an Armstrong number.`);
}
else {
    console.log(`${b} is not an Armstrong number.`);
}