const colours = [
  "red",
  "blue",
  "green",
  "orange",
  "cyan",
  "white",
  "black",
  "gray",
  "yellow",
  "purple"
];

function findX() {
  if (MOUSE_X === 0) {
    return Math.floor(Math.random() * 600);
  }
  return MOUSE_X
}

function findY() {
  if (MOUSE_Y === 0) {
    return Math.floor(Math.random() * 600);
  }
  return MOUSE_Y;
}
function findRadius() {
  return Math.floor(Math.random() * 8);
}
function findColour() {
  return colours[Math.floor(Math.random() * 10)];
}

class Circle {
  constructor(x, y, radius, startAngle, endAngle, colour) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.colour = colour;
  }

  draw() {
    // draw the circle
    const myCanvas = document.getElementById("circlesCanvas");
    const ctx = myCanvas.getContext("2d");
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    ctx.fillStyle = this.colour;
    ctx.fill();
  } 
}

// Global Mouse coordinates
MOUSE_X = 0
MOUSE_Y = 0

// Add mouse event handler
function getMousePosition(event) {
  MOUSE_X =  event.pageX;
  MOUSE_Y = event.pageY;
}
document.getElementById("circlesCanvas").onmousemove = getMousePosition;

function stopFollowingMouse(e) {
  MOUSE_X = 0;
  MOUSE_Y = 0;
}
document.getElementById("circlesCanvas").onmouseleave = stopFollowingMouse;


// Every half a second draw a circle
setInterval(() => {
  let x = findX()
  let y = findY()
  console.log("Drawing circle at:", x, y)

  let ourCircle = new Circle(x, y, findRadius(), 0, 2 * Math.PI, findColour())
  ourCircle.draw()
}, 100)



// class RandomCircle {
//   constructor() {
//     this.x = findX();
//     this.y = findY();
//     this.radius = findRadius();
//     this.startAngle = 0;
//     this.endAngle = 2 * Math.PI;
//     this.colour = findColour();
//   }

//   draw() {
//     return new Promise((resolve, reject) => {
//       const myCanvas = document.getElementById("circlesCanvas");
//       const canvas2D = myCanvas.getContext("2d");
//       canvas2D.beginPath()
//       canvas2D.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
//       canvas2D.fillStyle = this.colour;
//       canvas2D.fill();
//       resolve(this.colour);
//     });
//   } 
// }




// let another_nice_circle = new RandomCircle()
// another_nice_circle.draw()




// class Circle {
//   constructor(x, y, radius, startAngle, endAngle, colour) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.startAngle = startAngle;
//     this.endAngle = endAngle;
//     this.colour = colour;
//   }

//   draw() {
//     // draw the circle
//     const myCanvas = document.getElementById("circlesCanvas");
//     const ctx = myCanvas.getContext("2d");
//     console.log(this.colour);
//     ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
//     ctx.fillStyle = this.colour;
//     ctx.fill();
//   } 
// }



// function drawCircle() {
 
//     const myCanvas = document.getElementById("circlesCanvas");
//     const canvas2D = myCanvas.getContext("2d");
//     console.log(findColour());
//     canvas2D.arc(findX(), findY(), findRadius(), 0, 2 * Math.PI);
//     canvas2D.fillStyle = findColour();
//     canvas2D.fill();
//   }

//   for(i=0;i<5;i++){
//     drawCircle();
//   }




// function drawCircle() {
//   return new Promise(resolve => {
//     const myCanvas = document.getElementById("circlesCanvas");
//     const canvas2D = myCanvas.getContext("2d");
//     console.log(findColour());
//     canvas2D.arc(findX(), findY(), findRadius(), 0, 2 * Math.PI);
//     canvas2D.fillStyle = findColour();
//     canvas2D.fill();
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   }).then(() => {
//     drawCircle();
//   });

  //canvas2D.stroke();
//}



// class Person {
//   constructor(age, height, name) {
//     this.age = age
//     this.height = height
//     this.name = name
//   }

//   sayMyName() {
//     console.log("Hello, my name is:", this.name)
//   }
// }

// let adrian = new Person(25, 187, "Adrian")
// let keerthi = new Person(33, 170, "Keerthi")

// adrian.sayMyName()
// keerthi.sayMyName()


// console.log(adrian)
// console.log(keerthi)
