function sum(n){
  sum = 0
  for(i=0; i<=n; i++){
    console.log(i)
    sum += i
  }
  return sum;
}

console.log(sum(3))