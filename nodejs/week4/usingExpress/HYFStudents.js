//creating class for HYFDatabase
class HYFDataBase {
  constructor(HYFStudents) {
    this.studentsList = HYFStudents;
  }
  //Check for valid student
  areStudentDetailsValid(newStudent) {
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
      if (result.length == 0) {
        return;
      } else {
        //if result is > 0 then throw new error which catches the error (error has error message"student already exist")
        //in this program we call callback function with err.message which displays error message
        throw new Error("student already exist");
      }
    } else {
      //if any property is missing while posting student details then it throws this error and msg
      throw new Error("Student should have name classid phone and email");
    }
  }

  /*  elseif(result.length == 1 && result != newStudent){
        
} */

  //method to add students and their details
  addStudent(studentDetails, callback) {
    let successful;
    let error;
    try {
      this.areStudentDetailsValid(studentDetails);
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

  //method to edit student details through name
  editStudentInfo(studentInfo) {
    let studentToEdit = this.studentsList.filter(
      student => student.name == studentInfo.name
    );
    studentToEdit = studentInfo;
    console.log(studentToEdit)
    return studentToEdit;
  }

  deleteStudentFromHYF(studentName) {
    const checkStudentExist = this.studentsList.filter(student => {
      return studentName === student.name;
    });
    //console.log(checkStudentExist);
    if (checkStudentExist.length !== 0) {
      this.studentsList = this.studentsList.filter(student => {
        return studentName !== student.name;
      });
      return this.studentsList;
    }
  }
}

module.exports = HYFDataBase;
