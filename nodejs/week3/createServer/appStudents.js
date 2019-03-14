let http = require("http");
//const express = require("express")
//const body_parser = require('body-parser');
let StudentBook = require("./HYFStudents");

let HYFDataBase = new StudentBook(
  {
    name: "Hakki",
    classId: 07,
    email: "adahbour54@gmail.com",
    phone: "(263) 972-6043"
  },
  {
    name: "Keerthika devi Alampalli",
    classId: 08,
    email: "adahbour54@gmail.com",
    phone: "(745) 285-6338"
  },
  {
    name: "Rieko",
    classId: 07,
    email: "adahbour54@gmail.com",
    phone: "(971) 436-6442"
  },
  {
    name: "Sheila Qasemi",
    classId: 08,
    email: "virginrashed4@gmail.com",
    phone: "(457) 527-9154"
  },
  {
    name: "Virgeen",
    classId: 07,
    email: "virginrashed4@gmail.com",
    phone: "(259) 245-5777"
  },
  {
    name: "Abod",
    classId: 07,
    email: "a-hassam@outlook.com",
    phone: "(939) 553-4886"
  },
  {
    name: "Ivan Gray",
    classId: 06,
    email: "mis@sazuja.pm",
    phone: "(548) 420-7322"
  },
  {
    name: "Gordon Fields",
    classId: 08,
    email: "wogzijpeg@jusvijsut.lb",
    phone: "(970) 482-1032"
  },
  {
    name: "Mitchell Byrd",
    classId: 09,
    email: "mucipok@dul.dz",
    phone: "(480) 835-5405"
  }
);

let server = http.createServer(function(req, res) {
  //console.dir(req,{depth:1});returns an req object with list of keys methods etc

  console.log(req.url);
  let url = req.url;
  //const newStudent = req.body;
  console.log("send response to client..");

  if (url == "/getStudentsList") {
    const statusOfAction = HYFDataBase.getStudentsList();
    //checking status (getStudentsList function returned)
    checkStatus(statusOfAction, url);
  } else if (url == "/addStudentDetails" && req.method == "POST") {
    //res.end("request type:" + req.method);

    const statusOfAction = HYFDataBase.addStudentDetails({
      name: "Pragathi",
      classId: 07,
      email: "kkkk@mail.com",
      phone: 1234
    });
    //invoking checkStatus function to check status
    checkStatus(statusOfAction, url);
  } else if (url == "/getListByClass" && req.method == "GET") {
    const statusOfAction = HYFDataBase.getListByClass("");
    //checking status (getListByClass function returned)
    checkStatus(statusOfAction, url);
  } else if (url == "/getStudentDetailByName" && req.method == "GET") {
    const statusOfAction = HYFDataBase.getStudentDetailByName("Hakki");
    //checking status (getStudentDetailByName function returned)
    checkStatus(statusOfAction, url);
  } else if (url == "/editStudentInfo" && req.method == "PUT") {
    const statusOfAction = HYFDataBase.editStudentInfo({
      name: "Keerthika devi Alampalli",
      classId: 07,
      email: "adahbour54@gmail.com",
      phone: "(745) 285-6338"
    });
    checkStatus(statusOfAction, url);
  } else if (url == "/deleteStudentFromHYF" && req.method == "DELETE") {
    //console.log(req.method);
    const statusOfAction = HYFDataBase.deleteStudentFromHYF("Virgeen");
    //checking status (deleteStudentFromHYF function returned)
    checkStatus(statusOfAction, url);
  } else {
    res.end("You r in homepage");
  }
  function checkStatus(status, url) {
    if (status) {
      //check status code
      res.statusCode = 201;
      res.end("student " + url+" "+status + "done");
    } else {
      res.statusCode = 400;
      res.end("student " + url + " failure");
    }
  }
});

//server.use(body_parser);
server.listen(7337, function() {
  console.log("port:7337");
});
