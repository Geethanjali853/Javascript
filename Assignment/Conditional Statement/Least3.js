var a=10;
var b=90;
var c=85;
var smallest;
if(a <= b && a <= c){
    smallest = a;
}
else if(b <= a && b <= c){
    smallest = b;
}
else {
    smallest = c;
}
console.log("The smallest number is" + smallest);

var a=10;
var b=90;
var c=85;
if(a <= b && a <= c){
    console.log("A is least number.");
}
else if(b <= a && b <= c){
    console.log("B is least number.");
}
else {
    console.log("C is least number.");
}