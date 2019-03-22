//creating class for HYFDatabase
class HYFDataBase {
  constructor(HYFStudents) {
    this.studentsList = HYFStudents;
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
      console.log(result);
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
          console.log(this.studentsList);
          return;
        }else{
          throw new Error(
            " name classid phone and email values should not be empty"
          );
        }
         else if(result.length == 1 && string == 'add') {
          //if result is > 0 then throw new error which catches the error (error has error message"student already exist")
          //in this program we call callback function with err.message which displays error message
          throw new Error("student already exist");
        }else if(result.length ==0 && string == 'edit'){
          throw new Error('student not exist');
        }else {
          //if any property is missing while posting student details then it throws this error and msg
          throw new Error("Student should have name classid phone and email");
        }
      }
    }
      
  //method to add students and their details
  addStudent(studentDetails, callback) {
    let successful;
    let error;
    try {
      this.areStudentDetailsValid(studentDetails, "add");
      this.studentsList.push(studentDetails);
      callback("successful", error);
    } catch (err) {
      callback(successful, err.message);
    }
  }

  //method to get students list
  getStudentsList() {
    return this.studentsList.map(student => {
      return { Name: student.name, email: student.email };
    });
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
    try {
      this.areStudentDetailsValid(studentNewInfo, "edit");
      let studentToEdit = this.studentsList.filter(student => {
        return student.name == studentNewInfo.name;
      });

      studentToEdit.classId = studentNewInfo.classId;
      studentToEdit.phone = studentNewInfo.phone;
      studentToEdit.email = studentNewInfo.email;
      calback("suceess", error);
    } catch (err) {
      calback(sucess, err.message);
    }
  }

  deleteStudentFromHYF(studentName) {
    this.studentsList = this.studentsList.filter(student => {
      return studentName !== student.name;
    });
    return this.studentsList;
  }
}

module.exports = HYFDataBase;
