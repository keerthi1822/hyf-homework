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

//creating select label
let selectLabel =  document.createElement("label");
selectLabel.innerHTML = "select event";
document.body.appendChild(selectLabel);

//creating Select element with list of events
let events=["click","mouseover"];


let select = document.createElement("select");
document.body.appendChild(select);

for(let i=0;i<events.length;i++){
    let option = document.createElement("option");
    option.value=events[i];
    option.text=events[i];
    select.appendChild(option);
}
select.addEventListener("change",()=>{
let selected = document.querySelector("select").selectedIndex;

//Adding event to button
button.addEventListener(events[selected], ()=>{
let rValue =Math.floor(Math.random() * 10);
console.log(rValue);
para.innerHTML = enterText.value + ' - ' + spiritAnimals[rValue];
})
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