let btn = document.querySelector(".accept");

const arrayLi = Array.from(document.querySelectorAll("ul>li"));

btn.addEventListener("click", () => {
  arrayLi[0].style = "transform:translateX(1000px)";
  promise1.then(()=>{
    arrayLi[1].style = "opacity: 1; transform: scale(1)";
})
  console.log(1);
  
});

const promise1 = new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve();
      }, 700);
})


