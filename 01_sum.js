// Write a program in javascript. sum(2)(3); // Expected output is 5

// function sum(x){
//   return function add(y){
//     return x+y
//   }
// }
// console.log(sum(2)(3));


// function sum(x, y){
//   return x+y
// }
// console.log(sum(2,3));

function sum(x, y){
  if(y !== undefined){
    return x+y
  }else{
    return function(y){
      return x+y
    }
  }
}

console.log(sum(2)(3));
console.log(sum(2,3));