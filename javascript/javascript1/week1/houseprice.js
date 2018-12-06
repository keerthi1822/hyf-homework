let jHouse=1000000;
let pHouse=2500000;
let jArea= 5*11*8;
let pArea=8*10*10;
let jGardenArea=70;
let pGardenArea=100;
let jBasePrice= jArea*2.5*1000 + jGardenArea * 300;
let pBasePrice= pArea*2.5*1000 + pGardenArea * 300;
console.log("Lets Ask computer if price is worthy for house or not");
console.log("\nFor Julia's house:");
if(jHouse <= jBasePrice)
    console.log("Price is reasonable");
else
    console.log("Expensive ");

console.log("\nFor Peter's house:");
if(pHouse <= pBasePrice)
    console.log("Price is reasonable");
else
    console.log("Expensive");



