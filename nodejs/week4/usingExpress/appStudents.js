//let http = require("http");no need in express
const express = require("express");
const body_parser = require("body-parser");
const methodOverride = require("method-override");
const router = express.Router();
let StudentBook = require("./HYFStudents");

let HYFDataBase = new StudentBook([
  {
    name: "Hakki",
    classId: "07",
    email: "adahbour54@gmail.com",
    phone: "(263) 972-6043"
  },
  {
    name: "Keerthika devi Alampalli",
    classId: "08",
    email: "adahbour54@gmail.com",
    phone: "(745) 285-6338"
  },
  {
    name: "Rieko",
    classId: "07",
    email: "adahbour54@gmail.com",
    phone: "(971) 436-6442"
  },
  {
    name: "Sheila Qasemi",
    classId: "08",
    email: "virginrashed4@gmail.com",
    phone: "(457) 527-9154"
  },
  {
    name: "Virgeen",
    classId: "07",
    email: "virginrashed4@gmail.com",
    phone: "(259) 245-5777"
  },
  {
    name: "Abod",
    classId: "07",
    email: "a-hassam@outlook.com",
    phone: "(939) 553-4886"
  },
  {
    name: "Ivan Gray",
    classId: "06",
    email: "mis@sazuja.pm",
    phone: "(548) 420-7322"
  },
  {
    name: "Gordon Fields",
    classId: "08",
    email: "wogzijpeg@jusvijsut.lb",
    phone: "(970) 482-1032"
  }
]);
const app = express();
const port = 7777;

app.use(body_parser.json());
app.use(router);
//these 2 lines  needed when you would like to get open 'body'(where we add a new object) to post new student object
app.use(
  body_parser.urlencoded({
    extended: true
  })
);
app.use(body_parser.json()); //check and understand from body parser documentation from internet

app.use(methodOverride("X-HTTP-Method-Override"));

app.get("/", (req, res) => res.send("API for HYF"));

router
  .route("/students")
  .get((req, res) => {
    //most important
    //***make content type as aplication/json in both the bodys to accept json files(in postman )***
    //select raw data (postman)
    if (req.query.name) {
      const student = HYFDataBase.getStudentDetailByName(req.query.name);
      if (student.length > 0) {
        res.send(student);
      } else {
        res.status(404);
        res.send("student not exist");
      }
    } else if (req.query.classId) {
      const studentsWithClassId = HYFDataBase.getListByClass(req.query.classId);
      if (studentsWithClassId.length > 0) {
        res.send(studentsWithClassId);
      } else {
        res.status(404);
        res.send("student not exist");
      }
    } else {
      res.send(HYFDataBase.getStudentsList());
    }
  })

  .post((req, res) => {
    //most important
    //***make content type as aplication/json in both the bodys to accept json files(in postman )***
    //select raw data (postman)
    HYFDataBase.addStudent(req.body, (sucessCallback, errcallBack) => {
      if (sucessCallback) {
        res.status(201);
        res.send("sucessful");
      } else if (errcallBack) {
        res.status(401);
        res.send(errcallBack);
      } else {
        res.status(400);
        res.send("invalid request");
      }
    });
  })

  .put((req, res) => {
    //most important
    //***make content type as aplication/json in both the bodys to accept json files(in postman )***

    if (HYFDataBase.getStudentDetailByName(req.body.name).length !== 0) {
      //console.log(HYFDataBase.getStudentDetailByName(req.body.name));
      HYFDataBase.editStudentInfo(req.body);
      res.send(HYFDataBase.getStudentsList());

      res.status(200);
    } else {
      res.status(404);
      res.send("student not exist");
    }
    //if (!req.body) return res.sendStatus(400);
    //res.send( req.body );
  })
  //res.send("in put");

  .delete((req, res) => {
    //most important
    //***make content type as aplication/json in both the bodys to accept json files(in postman )***
    if (HYFDataBase.getStudentDetailByName(req.body.name).length !== 0) {
      HYFDataBase.deleteStudentFromHYF(req.body.name);
      res.send(HYFDataBase.getStudentsList());
      res.status(200);
    } else {
      res.status(404);
      res.send("student not exist");
    }
  });

app.listen(port, () => console.log(`HYF app listening to ${port}!`));
