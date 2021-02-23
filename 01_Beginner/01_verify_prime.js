// How would you verify a prime number?
// a prime number is only divisible by itself and 1
function checkPrime(n){
  var divisor = 2
  while(n>divisor){
    if(n % divisor == 0){
      return false; 
    }else{
      divisor++;
    }
  }
  return true;
}

console.log(checkPrime(12003))