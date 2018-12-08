let dogBirthYear=2015;
let dogFutureYear=2045;
let dogYear=((new Date()).getFullYear()-dogBirthYear)*7;
console.log("dog is "+dogYear+ "dog years old now");
let shouldShowResultInDogYears=(dogFutureYear-dogBirthYear)*7;
if(shouldShowResultInDogYears)
    console.log("Your dog will be "+ shouldShowResultInDogYears+" dog years old in 2045");


