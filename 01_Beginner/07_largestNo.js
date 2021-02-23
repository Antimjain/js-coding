function findLargest(a,b,c){
  if(a>=b && a>=c){
    console.log("a is largest", a)
  }else if(b>=a && b>= c){
    console.log("b is largest", b)
  }else{
    console.log("c is largest", c)
  }
}

// findLargest(10, 32, 5)

findLargest(32, 32, 5)