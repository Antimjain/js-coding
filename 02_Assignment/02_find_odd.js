const arr = [2,5,3,7,8, 12, 16]

function findOdd(arr){
  const output = []
  for(let i=0; i<= arr.length; i++){
    console.log()
    if(i%2 !== 0){
      output.push(i)
    }
  }
  return output
}

console.log(findOdd(arr))