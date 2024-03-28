var a=10;
var b=90;
var c=85;
var largest;
if(a >= b && a >=c){
    largest = a;
}
else if(b >= a && b >= c){
    largest = b;
}
else {
    largest = c;
}
console.log("The largest number is" + largest);
