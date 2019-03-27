/* const fs = require('fs');// changed to jsonfile module 
//this is fs syntax down here for FS
let studentsJsonRaw = fs.readFileSync('students.json');//here we r getting stream of string and need to parse the data to json
let studentsJson =JSON.parse(studentsJsonRaw);//patsing string to json */

/* Why? use jsonfile package instead of FS?

 Writing JSON.stringify() and then fs.writeFile()(can check in addStudent functionality
 for stringyfy) and JSON.parse() with fs.readFile() enclosed in try/catch blocks became annoying. */

//install jsonfile package and do following code (from jsonfile package documentation) instead of fs
const jsonfile = require("jsonfile");
const file = "students.json";

let studentsJson = jsonfile.readFileSync(file); //also try with readFile(asynchrnous)

//creating class for HYFDatabase
class HYFDataBase {
  constructor() {
    this.studentsList = studentsJson;
  }
  //Check for valid student
  areStudentDetailsValid(newStudent, string) {
    // console.log(newStudent);
    if (
      newStudent.hasOwnProperty("name") &&
      newStudent.hasOwnProperty("classId") &&
      newStudent.hasOwnProperty("email") &&
      newStudent.hasOwnProperty("phone")
    ) {
      const result = this.getStudentDetailByName(newStudent.name);
      //console.log(result);
      //checking for duplicate result.length == 0 meanns no duplicate available here . So we simply 'return'
      //to calling function that means  true and continue in try block
      if (
        (result.length == 0 && string === "add") ||
        (result.length > 0 && string === "edit")
      ) {
        if (
          newStudent.name !== "" &&
          newStudent.classId !== "" &&
          newStudent.email !== "" &&
          newStudent.phone !== ""
        ) {
          //console.log(this.studentsList);
          return;
        } else {
          throw new Error(
            " name classid phone and email values should not be empty"
          );
        }
      }
      if (result.length == 1 && string == "add") {
        //if result is > 0 then throw new error which catches the error (error has error message"student already exist")
        //in this program we call callback function with err.message which displays error message
        throw new Error("student already exist");
      }
      if (result.length == 0 && string == "edit") {
        throw new Error("student not exist");
      }
    } else {
      //if any property is missing while posting student details then it throws this error and msg
      throw new Error("Student should have name classid phone and email");
    }
  }

  //method to add students and their details
  addStudent(studentDetails, callback) {
    let successful;
    let error;
    try {
      this.areStudentDetailsValid(studentDetails, "add");
      this.studentsList.push(studentDetails);
      //const dats = JSON.stringify//this line is for FS module
      //save the file permanently(with out this code the object we added wil temperarly add but not save in json )
      // coment above is for file system (FS module builtin in npm) this is not recomended becase its annoying
      // to always to parse while readin the file (at the top) and stringyfying here while writing(write file code missing here search from google Filesystem syntax)

      //need to stringify the parsed data
      /*  let data = JSON.stringify(this._studentList,null,2);
      //using file system builtin module
      fs.writeFile('students.json', data ,(err)=>{//saving file in to json file
        if (err) console.error(err);
      }); */

      //so install "jsonfile" module we use here
      //writeFile (command for saving data to file)
      jsonfile.writeFile(file, this.studentsList, function(err) {
        if (err) console.error(err);
      });
      callback("successful", error);
    } catch (err) {
      callback(successful, err.message);
    }
  }

  //method to get students list
  getStudentsList() {
    return this.studentsList;
  }

  //method to get student using classId
  getListByClass(classid) {
    const classList = this.studentsList.filter(student => {
      return student.classId == classid;
    });
    return classList;
  }

  //method to get student using name
  getStudentDetailByName(name) {
    let detailsForSpecificStudent = this.studentsList.filter(student => {
      return student.name == name;
    });
    //console.log('found name');
    return detailsForSpecificStudent;
  }

  /*   validateStudentvaluesEmpty(newInfo) {
    if (
      newInfo.name !== "" &&
      newInfo.classId !== "" &&
      newInfo.email !== "" &&
      newInfo.phone !== ""
    ) {
      return;
    } else {
      throw new Error(
        " name classid phone and email values should not be empty"
      );
    }
  } */

  //method to edit student details through name
  editStudentInfo(studentNewInfo, calback) {
    let sucess;
    let error;
    let i;
    try {
      this.areStudentDetailsValid(studentNewInfo, "edit");
      this.studentsList.forEach((student, index) => {
        i = index;
        return student.name == studentNewInfo.name;
      });
      //console.log(i);
      this.studentsList[i].classId = studentNewInfo.classId;
      this.studentsList[i].phone = studentNewInfo.phone;
      this.studentsList[i].email = studentNewInfo.email;
      calback("suceess", error);
    } catch (err) {
      calback(sucess, err.message);
    }
  }

  isStudentExist(studentToDelete){
  
    if(studentToDelete.hasOwnProperty(name)){
      return;
    }
    else {
      throw new Error(`not valid info`);
    }
  }

  deleteStudentFromHYF(studentInfo, callback) {
    let sucess;
    let error;
    console.log(studentInfo);
    try {
      this.isStudentExist(studentInfo);
      let findIndexOfStudentToDelete = this.studentsList.findIndex(
        student => student.name == studentInfo.name
      );
      console.log(findIndexOfStudentToDelete);
      this.studentsList.splice(findIndexOfStudentToDelete, 1);
      callback("sucess", error);
    } catch (err) {
      callback(sucess, err.message);
    }
  }
}

module.exports = HYFDataBase;
