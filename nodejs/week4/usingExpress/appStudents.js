//let http = require("http");no need in express
const express = require("express");
const body_parser = require("body-parser");
const studentRouter = require("./routerStudent") ;

const app = express();
const port = 7777;

let logger = function (req,res,next){
  console.info(`GOT REQUEST!  ${req.method}  ${req.originalUrl}`);
  next();//passing the request in the next handler in the stack
};

app.use(logger);

app.use(body_parser.json());

//these 2 lines  needed when you would like to get open 'body'(where we add a new object) to post new student object
app.use(
  body_parser.urlencoded({
    extended: true
  })
);
app.use(body_parser.json()); //check and understand from body parser documentation from internet
app.use(studentRouter);
//app.use(methodOverride("X-HTTP-Method-Override"));

app.get("/", (req, res) => res.send("API for HYF"));

app.listen(port, () => console.log(`HYF app listening to ${port}!`));
