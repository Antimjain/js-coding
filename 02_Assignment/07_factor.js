function findFactors(n){
  let factors = []
  divisor = 2
  while(n> 2){
    if(n % divisor == 0){
      factors.push(divisor);
      n = n/divisor
    }
    divisor ++
  }
  return factors
}

console.log(findFactors(54))