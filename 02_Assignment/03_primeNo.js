function checkPrime(no){
  let divisor = 2;
  while(no>divisor){
    if(no % divisor == 0){
      return false
    }
    divisor ++;
  }
  return true;
}


let arr = []
function printPrime(){
  for(let i=2; i<50; i++){
    let output = checkPrime(i) 
    if (output){
      arr.push(i)
    }
  }
  return arr
}

console.log(printPrime())
