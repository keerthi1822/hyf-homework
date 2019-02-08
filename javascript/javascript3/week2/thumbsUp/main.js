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
      name: "Indoor games",
      description: "some times",
      img: "gamesindoor.jpg"
    },
    {
      name: "Go for a walk",
      description: "some times",
      img: "walk.jpg"
    }
  ];
  
  let acceptBtn = document.querySelector(".accept");
  let rejectBtn = document.querySelector(".reject");
  const arrayLi = Array.from(document.querySelectorAll("ul>li"));
  
  //select buttons and put in an array
  const arrayBtn = Array.from(document.querySelectorAll("button"));
  console.log(arrayBtn);
  
  //defining function animateLiOut
  function animateLiOut() {
    arrayLi[0].style = "transform:translateX(1000px)";
    return new Promise((resolve, reject) => {
      //when the buttons clicked
      setTimeout(() => {
        resolve();
      }, 700);
    });
  }
  
  //defining animateNextLiIntoView
  function animateNextLiIntoView() {
    arrayLi[1].style = "opacity: 1; transform: scale(1);";
  }
  //The click listener should stand alone.
  
  acceptBtn.addEventListener("click", () => {
    animateLiOut()
      .then(() => {
          animateNextLiIntoView();
      });
  });
  