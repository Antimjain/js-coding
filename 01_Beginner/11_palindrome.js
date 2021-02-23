function checkPalindrome(str){
  for(let i=0; i<= str.length/2; i++){
    if(str[i] !== str[str.length-1 -i]){
      // console.log("str[str.length-1 -i]",str[str.length-1 -i])
      return "not palindrome"
    }
  }
  return "palindrome"
}

console.log(checkPalindrome("abcde"))