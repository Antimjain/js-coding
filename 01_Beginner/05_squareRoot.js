function findSquareRoot(n){
  let result
  for(let i=1; i <= n; i++){
    if(i*i == n){
      result = i
      break ;
    }
  }
  return result
}

console.log(findSquareRoot(64))