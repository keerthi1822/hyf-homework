const express = require("express");
const router = express.Router();
const Students = require("./HYFStudents");
const HYFDataBase = new Students();

router
  .route("/students/:studentName")

  .get((req, res) => {
    //console.log(req.params.studentName);
    const student = HYFDataBase.getStudentDetailByName(req.params.studentName);
    if (student.length > 0) {
      res.send(student);
    } else {
      res.status(404);
      res.send("student not exist");
    }
  });

router
  .route("/students")
  .get((req, res) => {
    //most important
    //***make content type as aplication/json in both the bodys to accept json files(in postman )***
    //select raw data (postman)
    if (req.query.name) {
      if (req.query.name.length <= 3) {
        res.send("name should be more than 3 Charecters");
      }
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

    HYFDataBase.editStudentInfo(req.body, (sucessback, errorback) => {
      if (sucessback) {
        res.send(sucessback);
        res.status(200);
      } else if (errorback) {
        res.send(errorback);
        res.status(401);
      } /* else {
        res.status(404);
        res.send("student not exist");
      } */
    });
  })

  .delete((req, res) => {
    //most important
    //***make content type as aplication/json in both the bodys to accept json files(in postman )***
    const studentToDelete = HYFDataBase.getStudentDetailByName(req.body.name);
    if (studentToDelete) {
      HYFDataBase.deleteStudentFromHYF(req.body, (sucessback, errorback) => {
        if (sucessback) {
          res.send(sucessback);
          res.status(200);
        } else if (errorback) {
          res.send(errorback);
          res.status(404);
        } else {
          res.send("something went wrong");
        }
      });
    }
  });

module.exports = router;
