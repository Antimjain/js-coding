let arr = [1,3,9,10]
function insertElement(){
  const index = 3
  const element = 55
  //one way
  // arr.splice(index, 0, element);


  //second way
  for (i=arr.length; i>index; i--){
    // a[4] = a[4-1]
    arr[i] = arr[i-1]
  }
  arr[index] = element;
  return arr;
}

console.log(insertElement())