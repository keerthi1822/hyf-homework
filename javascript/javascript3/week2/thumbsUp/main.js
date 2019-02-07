let acceptBtn = document.querySelector('.accept');
let rejectBtn = document.querySelector('.reject');
const arrayLi = Array.from(document.querySelectorAll('ul>li'));

//when the buttons clicked

  const arrayBtn = Array.from(document.querySelectorAll('button'));
  console.log(arrayBtn);

 

  let animateLiOut = function (){
    arrayLi[0].style = "transform:translateX(1000px)";
      return new Promise((resolve,reject)=>{
     resolve();
    });

  acceptBtn.addEventListener("click", animateLiOut());

 

    function animateNextLiIntoView(){
    arrayLi[1].style = "opacity: 1; transform: scale(1);"
    }
  
 
 }
  animateLiOut().then(()=>{
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





