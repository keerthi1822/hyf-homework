let acceptBtn = document.querySelector(".accept");
let rejectBtn = document.querySelector(".reject");
const arrayLi = Array.from(document.querySelectorAll("ul>li"));

//select buttons and put in an array
const arrayBtn = Array.from(document.querySelectorAll("button"));
console.log(arrayBtn);

//defining function animateLiOut
function animateLiOut() {
  //create a promise and call resolve
  return new Promise((resolve, reject) => {
    //when the buttons clicked
    acceptBtn.addEventListener("click", () => {
      arrayLi[0].style = "transform:translateX(1000px)";
      resolve();
    });
  });
}

//defining animateNextLiIntoView
function animateNextLiIntoView() {
  arrayLi[1].style = "opacity: 1; transform: scale(1);";
}

//Then function defined
animateLiOut().then(() => {
  animateNextLiIntoView();
});

// function returningPromise(){

//   return new Promise((resolve,reject)=>{
//     if()
//       resolve();

//     if()
//     reject();

//   })
// }

// returningPromise.then(()=>{

// })



acceptBtn.addEventListener("click", animateLiOut);

//create a promise and call resolve
let eventPromise = new Promise((resolve,reject)=>{
   resolve();
  });

//defining function animateLiOut 
function animateLiOut () {
  arrayLi[0].style = "transform:translateX(1000px)";
}