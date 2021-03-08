// // program to remove duplicate value from an array
// const array = [1, 2, 3, 2, 3];
// function getUnique(arr){
    
//   let uniqueArr = [];
  
//   // loop through array
//   for(let i of arr) {
//     if(uniqueArr.indexOf(i) === -1) {
//       uniqueArr.push(i);
//     }
//   }
//   console.log(uniqueArr);
// }

// // calling the function
// // passing array argument
// getUnique(array);

// //second way
// let uniqueArr = [...new Set(array)];
// console.log(uniqueArr);





// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = chars.filter((c, index) => {
//     return chars.indexOf(c) === index;
// });

// console.log(uniqueChars);


// function callMe(a,b){
//   function q(x){
//     return x*x
//   }
//   return Math.sqrt(q(a)+q(b))
// }
// console.log(callMe(3,2))

// for(let i=0; i<10;i++){

// }

// function a(o){
//   for(; o.next; o=o.next);
//     return o;
  
// }

// console.log(a(3))

// var scope = "global"
// function call(){
//   var scope = "local"
//   function call2(){
//     console.log(scope)
//     return scope
//   }
//   return call2


a = [10,12,15, 21]
for(var i = 0; i<=a.length; a++){
  setTimeout(()=>{
    console.log(i)
  }, 100)
}

for(let j = 0; j<=a.length; a++){
  setTimeout(()=>{
    console.log(i)
  }, 100)
}

for(var k = 0; k<=a.length; a++){

  setTimeout(function(x){
    return function(){
      console.log(x)
    }
  }(k),100)
}