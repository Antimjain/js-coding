let arr = [1, 2, 3 , 4 , 5]
function removeItemFromArray(arr, removeItem){
  let output = []
  for(let i=0; i<arr.length; i++ ){
    console.log(i)
    if(arr[i] !== removeItem){
      output.push(arr[i])
    }
  }
  return output
}

console.log(removeItemFromArray(arr, 2))




// program to remove item from an array

// function removeItemFromArray(array, n) {
//   const index = array.indexOf(n);

//   // if the element is in the array, remove it
//   if(index > -1) {

//       // remove item
//       array.splice(index, 1);
//   }
//   return array;
// }

// const result = removeItemFromArray([1, 2, 3 , 4, 5], 2);

// console.log(result);