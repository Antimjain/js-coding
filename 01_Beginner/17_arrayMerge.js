let arr1 = [1,2,3,4,5,6]
let arr2 = [7,5,3,4,5,6]

let arr = [...arr1, ...arr2]
console.log(arr)


let UniqueArr = []
for(let i of arr){
  if(UniqueArr.indexOf(i) === -1)  {
    UniqueArr.push(i)
  } 
}
console.log(UniqueArr)
return UniqueArr
