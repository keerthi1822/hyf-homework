let numbers = [1, 2, 3, 4];


const filteredNumbers= 
numbers.filter((number)=>{
    return (number%2 !== 0);
});
const newNumbers= filteredNumbers.map(function(number){
    return number * 2;
});

 console.log("The doubled numbers are", newNumbers); // [2, 6]