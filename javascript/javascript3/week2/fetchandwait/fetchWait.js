fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(dogs => {
    //console.log(dogs);
    return new Promise(resolve => {
      setTimeout(() => { resolve(dogs); }, 3000);
    });
  })
  .then(dogs => {
    console.log(dogs.message);
    console.log(dogs.status);
  });
    
