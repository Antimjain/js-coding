function Fibonacci(n){
  let arr = [0,1]
  var n1 = 0
  var n2 = 1
  for(let i=2; i<n; i++){
    nextElement = n1 + n2
    arr.push(nextElement);
    [n1, n2] = [n2, nextElement]
  }
  return arr
}

console.log(Fibonacci(5))