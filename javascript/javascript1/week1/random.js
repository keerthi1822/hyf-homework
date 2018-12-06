let firstWords=["noisy","funny","relaxed","weak","generous","clover","serious",                     "worried","cheerful","cool"];
let secondWords=["bag","painting","face","heart","mind","people","expression",                      "story","session","kid"];
for(let i=0;i<10;i++)
{
const randomNumber1 = Math.floor(Math.random() * 10) + 0;

const randomNumber2 = Math.floor(Math.random() * 10) + 0;


let startUp = firstWords[randomNumber1]+ secondWords[randomNumber2];
console.log(startUp);
}