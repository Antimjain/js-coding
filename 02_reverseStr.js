// function reverseString(str) {
//   let stringRev = "";
//   for (let i = str.length; i >= 0; i--) {
    // stringRev += str[i];
//     stringRev = stringRev + str.charAt(i);
//   }
//   return stringRev;
// }
// console.log(reverseString("antim")); // Output: peedarP

var profiles = [{
  username: 'ronny',
  email: 'ron@gmail.in',
  stateCode: 'KA'
}, {
  username: 'bobby',
  email: 'bobby@gmail.com',
  stateCode: 'UP'
}, {
  username: 'arjun',
  email: 'arjunk@hotmail.in',
  stateCode: 'KA'
}];

const stateViceProfie = {}
profiles.forEach(profile =>{
  if(stateViceProfie[profile.stateCode] === undefined){
    stateViceProfie[profile.stateCode] = []
  }
    stateViceProfie[profile.stateCode].push(profile)
  }         
)
console.log(stateViceProfie)

