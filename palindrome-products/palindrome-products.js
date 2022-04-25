//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static generate({maxFactor, minFactor}) {
    if (maxFactor<minFactor) { throw new Error('Min must be less than Max')}
    var palindromeList = [];
    for (let m = minFactor; m <= maxFactor; m++) {
      for (let n = minFactor; n < maxFactor; n++) {
        if ((m * n).toString() === (m * n).toString().split('').reverse().join('')){
          let match = false
          if(palindromeList.length > 0){
            for (let x = 0; x < palindromeList.length; x++) {
              console.log(palindromeList[x])
              if(palindromeList[x]['value']===m*n){
                palindromeList[x]['factors'].push([m, n]);
                match = true;
              }
            }
          } if (!match){
            palindromeList.push({value: m * n, factors: [[ m, n ]]});
          }
        }
      }
    } return palindromeList
  }
  
  smallest(){
    return palindromeList.reduce((a, b)=> { a.value < b.value ? a : b } );
  }
  largest(){
    return palindromeList.reduce((a, b)=> { a.value > b.value ? a: b })
  }
}