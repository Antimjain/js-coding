// How do get nth Fibonacci number?
// ex [0,1,1,,2,3,5,8]

function fibonacci(n){
  var fibo = [0, 1];
  
  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }

 return fibo[n];
} 


console.log(fibonacci(5))