function LCM(num1,num2){
  let hcm ;
  for(i=1; i<=num1 && i<= num2; i++){
    if ( num1 % i== 0 && num2 % i == 0){
      hcm = i
    }
  }
  const lcm = (num1*num2)/hcm
  console.log("LCM",lcm)
  return lcm
}


console.log(LCM(6,8))


// program to find the LCM of two integers
// higher number among number1 and number2 is stored in min
// let min = (num1 > num2) ? num1 : num2;

// while loop
// while (true) {
//     if (min % num1 == 0 && min % num2 == 0) {
//         console.log(`The LCM of ${num1} and ${num2} is ${min}`);
//         break;
//     }
//     min++;
// }