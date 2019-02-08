// creating an Array of objects
const likesAndDislikesArray = [
  {
    name: "Listening to Music",
    description: "Love music",
    img: "MUSIC.jpg"
  },
  {
    name: "Reading Books",
    description: "Love Books",
    img: "Books.jpg"
  },
  {
    name: "Cooking",
    description: "No cooking please",
    img: "cooking.jpg"
  },
  {
    name: "Dance",
    description: "Pls don't ask me",
    img: "dance.jpg"
  },
  {
    name: "Shopping",
    description: "Only on discount period....hehehe",
    img: "Shopping.jpg"
  },
  {
    name: "Shopping",
    description: "Only on discount period....hehehe",
    img: "Shopping.jpg"
  },
  {
    name: "Indoor games",
    description: "some times",
    img: "gamesindoor.jpg"
  },
  {
    name: "Cooking",
    description: "No cooking please",
    img: "cooking.jpg"
  },
  {
    name: "Go for a walk",
    description: "some times",
    img: "Walk.jpg"
  },
  {
    name: "Indoor games",
    description: "some times",
    img: "gamesindoor.jpg"
  }
];

//Display list items on to the screen

let activity = document.querySelectorAll("li");
console.log(activity);

for (let i = 0; i < likesAndDislikesArray.length; i++) {
  activity[i].innerHTML = "";

  let headerName = document.createElement("h3");
  headerName.innerHTML = likesAndDislikesArray[i].name;
  activity[i].appendChild(headerName);

  let activityImg = document.createElement("img");
  activityImg.src = likesAndDislikesArray[i].img;
  activityImg.width = 200;
  activity[i].appendChild(activityImg);
}

//Adding event listener to button , creating function animateLiOut and returning promise

let index = 0;

//selecting buttons
let acceptBtn = document.querySelector(".accept");
let rejectBtn = document.querySelector(".reject");
const arrayLi = Array.from(document.querySelectorAll("ul>li"));
//declaring empty arrays to push elements dynamically
const acceptedItems=[];
const rejectedItems=[];

//select buttons and put in an array
const arrayBtn = Array.from(document.querySelectorAll("button"));
console.log(arrayBtn);

//defining function animateLiOut
function animateLiOut(index, str) {
  if (str == "accept") {
    arrayLi[index].style = "transform:translateX(1000px)";
  }
  if (str == "reject") {
    arrayLi[index].style = "transform:translateX(-1000px)";
  }
  if (index < arrayLi.length) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve();
      }, 700);
    });
  }
 else {
    reject(error);
  }
}

//defining animateNextLiIntoView
function animateNextLiIntoView(nextLi) {
  arrayLi[nextLi].style = "opacity: 1; transform: scale(1);";
}

//adding event listener to button
acceptBtn.addEventListener("click", () => {
  animateLiOut(index, "accept").then(() => {
    animateNextLiIntoView(index + 1);
    acceptedItems.push(arrayLi[index].innerHTML);
    console.log("accepted: "+acceptedItems);
    index++;
  });
});

//adding event listener to button
rejectBtn.addEventListener("click", () => {
  animateLiOut(index, "reject").then(() => {
    animateNextLiIntoView(index + 1);
    rejectedItems.push(arrayLi[index].innerHTML);
    console.log("rejected: "+rejectedItems);
    index++;
  });
});
animateLiOut().catch((errMsg) => {
  console.log(errMsg);
  arrayLi[index].style = "transform: none;";
});

//additional feature
//collecting accepted and rejected items
console.log(acceptedItems);
console.log(rejectedItems);





