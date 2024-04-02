function fibonacci(n){
if (n <= 1) {
    return n;
}
return fibonacci (n - 1) + fibonacci (n - 2);
}
n = 10
for(var i = 0; i < n; i++){
    console.log(fibonacci(i));
}


var num = 10;
var a = 0, b = 1, c;
console.log("Fibonacci Series: ");
for (var i = 1; i <= num; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}