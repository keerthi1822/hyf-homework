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
    img: "walk.jpg"
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

//select buttons and put in an array
const arrayBtn = Array.from(document.querySelectorAll("button"));
console.log(arrayBtn);



//defining function animateLiOut
function animateLiOut(i) {
  arrayLi[index].style = "transform:translateX(1000px)";
  if (index < arrayLi.length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 700);
  });
}
else{
  reject(index);
}
}

//defining animateNextLiIntoView
function animateNextLiIntoView(nextLi) {
  arrayLi[nextLi].style = "opacity: 1; transform: scale(1);";
  // isindexReachedEndOfList(index);
}



//adding event listener to button
acceptBtn.addEventListener("click", () => {
  animateLiOut(index).then(() => {
    animateNextLiIntoView(index + 1);
    index++;
    }).catch(()=>{
      arrayLi[index].style = "transform: none";
    })
});

//adding event listener to button
rejectBtn.addEventListener("click", () => {
  animateLiOut(index).then(() => {
    animateNextLiIntoView(index + 1);
    index++;
    }).catch(()=>{
      arrayLi[index].style = "transform: none";
    })
});











// function isindexReachedEndOfList(index) {
//   if (index === arrayLi.length) {
//     console.log(arrayLi.length);
//     console.log(index);
//     arrayLi[nextLi].style = "transform: none";
//   }
// }
