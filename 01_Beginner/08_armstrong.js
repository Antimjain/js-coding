function checkArmstrong (n){
  temp = n
  sum = 0
  while(temp > 0 ){
    remainder = temp%10
    sum += remainder*remainder*remainder
    temp = parseInt(temp /10)
  }
  if(n === sum){
    return `${n} is a amstrong No`;
  }else{
    return "Not a amstrong No";
  }
}


console.log(checkArmstrong(153))
