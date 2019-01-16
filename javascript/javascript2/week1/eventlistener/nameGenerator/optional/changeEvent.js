//creating label to input field
let nameLabel = document.createElement("label");
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
para.innerHTML = "";
document.body.appendChild(para);



//creating Select element with list of events
//let events = ["click", "mouseover"];




// for (let i = 0; i < events.length; i++) {
//     let option = document.createElement("option");
//     option.value = events[i];
//     option.text = events[i];
//     select.appendChild(option);
// }

//creating select label
let selectLabel = document.createElement("label");
selectLabel.innerHTML = "select event";
document.body.appendChild(selectLabel);

//creating select tag and its options
let selectTag = document.createElement("select");


document.body.appendChild(selectTag);


//creating options to select tag
const options = [
    {value: "select an event" , content: "select event"},
    {value: "mouseover", content: "mouseover"},
    {value: "dblclick" , content: "Doubleclick" },
    {value: "click" , content: "click" },
    {value: "contextmenu" , content: "contextmenu" }
];
for (let option of options){
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.innerHTML = option.content;
    selectTag.appendChild(optionElement);
}


function generateSpiritualAnimal(){
    
    let rValue = Math.floor(Math.random() * 10);
    console.log(rValue);
    para.innerHTML = enterText.value + ' - ' + spiritAnimals[rValue];
}

const registeredEvents=[];

function attachEventToButton(eventName) {
    //Adding event to button
    console.log(eventName);
    button.addEventListener(eventName, generateSpiritualAnimal);
    registeredEvents.push(eventName);
}


function detachEventsFromButton(){
    button.removeEventListener(registeredEvents.pop(), generateSpiritualAnimal);
    
}


selectTag.addEventListener("change", () => {
    
    let index = selectTag.selectedIndex;
    let options = document.querySelectorAll("option");
    console.log(index);
    let event = options[index].value;
    console.log(event);
    detachEventsFromButton();
    attachEventToButton(event);

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