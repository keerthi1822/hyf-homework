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

//creating options option1,option2,option3.....
const option1 = document.createElement('option');
option1.value = "select an event";
option1.innerHTML = "select an event";
selectTag.appendChild(option1);

const option2 = document.createElement('option');
option2.value = "mouseover";
option2.innerHTML = "Mouseover";
selectTag.appendChild(option2);

const option3 = document.createElement('option');
option3.value = "click";
option3.innerHTML = "Click";
selectTag.appendChild(option3);

//can add more options(events) here...

const option4 = document.createElement('option');
option4.value = "dblclick";
option4.innerHTML = "doubleclick";
selectTag.appendChild(option4);

document.body.appendChild(selectTag);





function attachEventToButton(eventName) {
    //Adding event to button
    button.addEventListener(eventName, () => {
        console.log(eventName);
        let rValue = Math.floor(Math.random() * 10);
        console.log(rValue);
        para.innerHTML = enterText.value + ' - ' + spiritAnimals[rValue];
    })
}


selectTag.addEventListener("change", () => {
    let index = selectTag.selectedIndex;
    let options = document.querySelectorAll("option");
    console.log(index);
    let event = options[index].value;
    console.log(event);
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