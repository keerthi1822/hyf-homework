//creating class for HYFDatabase
class HYFDataBase {
  constructor(...HYFStudents) {
    this.studentsList = HYFStudents;
  }

  //method to add students and their details
  addStudentDetails(studentDetails) {
    const checkDuplicate = this.studentsList.filter(student => {
      return (
        student.name === studentDetails.name &&
        student.classId === studentDetails.classId
      );
    });
    //console.log(checkDuplicate);
    if (checkDuplicate.length == 0) {
      //console.log("no duplicate exist")
      this.studentsList.push(studentDetails);
      console.log(this.studentsList);
      return true;
    } else {
      //console.log(studentDetails.name + " already exist");
      return false;
    }
  }

  //method to get students list
  getStudentsList() {
    const studentsList = this.studentsList.map(student => {
      return { Name: student.name, email: student.email };
    });
    return true;
    // console.log(studentsList);
  }

  //method to get student using classId
  getListByClass(classid) {
    if (classid != "") {
      console.log(classid);
      const classList = this.studentsList.filter(student => {
        return student.classId == classid;
      });
      if (classList.length != 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return "false";
    }
    //console.log(classList);
  }

  //method to get student using name
  getStudentDetailByName(name) {
    if (name != "") {
      let detailsForSpecificStudent = this.studentsList.filter(student => {
        return student.name == name;
      });
      if (detailsForSpecificStudent.length != 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return "false";
    }
  }

  //method to edit student details through name
  editStudentInfo(studentInfo) {
    if (studentInfo != "") {
      this.studentsList.forEach(student => {
        if (student.name === studentInfo.name) {
          this.student = studentInfo;
        }
      });
      return true;
    } else {
      return false;
    }
  }
  deleteStudentFromHYF(studentName) {
    const checkStudentExist = this.studentsList.filter(student => {
      return studentName === student.name;
    });
    console.log(checkStudentExist);
    if (checkStudentExist.length !== 0) {
      this.studentsList = this.studentsList.filter(student => {
        return studentName !== student.name;
      });
      return true;
    } else {
      return false;
    }
  }
}

module.exports = HYFDataBase;
