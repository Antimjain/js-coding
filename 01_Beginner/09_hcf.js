function hcf(num1,num2){
  let hcm ;
  for(i=1; i<=num1 && i<= num2; i++){
    if ( num1 % i== 0 && num2 % i == 0){
      hcm = i
    }
  }
  return hcm
}

console.log(hcf(60,72))