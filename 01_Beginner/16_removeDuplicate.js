// program to remove duplicate value from an array
const array = [1, 2, 3, 2, 3];
function getUnique(arr){
    
  let uniqueArr = [];
  
  // loop through array
  for(let i of arr) {
    if(uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}

// calling the function
// passing array argument
getUnique(array);

//second way
let uniqueArr = [...new Set(array)];
console.log(uniqueArr);