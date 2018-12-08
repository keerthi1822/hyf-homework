let pets;
console.log("My favorite pets")
pets=["dog","cat","horse","sheep","cow"];
for(let i=0;i<pets.length;i++){
    console.log(pets[i]);
}
console.log("Adding baby pig to My favorite pets");
pets.push("Baby pig");
for(let i=0;i<pets.length;i++){
    console.log(pets[i]);
}