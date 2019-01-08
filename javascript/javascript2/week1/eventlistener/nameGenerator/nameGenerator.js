
//creating label to input field
let nameLabel =  document.createElement("label");
nameLabel.innerHTML = "Enter some name";
document.body.appendChild(nameLabel);

//creating input field
let enterText = document.createElement("input");
document.body.appendChild(enterText);

//creating button to generate spirit animal
let button = document.createElement("button");
button.innerHTML = "Generate spirit animal";
document.body.appendChild(button);

//creating empty space to print result
let para = document.createElement("p");
para.innerHTML="";
document.body.appendChild(para);

//Adding event to button
button.addEventListener("click", ()=>{
let rValue =Math.floor(Math.random() * 10);
console.log(rValue);
para.innerHTML = enterText.value + ' - ' + spiritAnimals[rValue];
})

//Array of spirit Animals
let spiritAnimals = ["Crystal Polar Bear Of Suke",
                     "Granite Ram Of Arax",
                     "Iron Boar Of Rumfuss",
                     "Amber Leopard Of Uraza",
                     "Bamboo Panda Of Jhi",    
                     "Copper Falcon Of Essix",
                     " Coral Octopus Of Mulop",
                     "Slate Elephant Of Dinesh",
                     "Golden Lion Of Cabaro",
                     "Bronze Eagle Of Halawir"];





    
    
    
    
    
