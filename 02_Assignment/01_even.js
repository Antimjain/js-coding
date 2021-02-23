function printEven(){
  let arr = []
  const printNoCount = 10
  const length = printNoCount*2
  for(let i=0; i<=length; i++){
    if (i% 2 == 0){
      arr.push(i)
    }
  }
  return arr;
}

console.log(printEven())