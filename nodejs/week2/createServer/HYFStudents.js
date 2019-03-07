//creating class for HYFDatabase
class HYFDataBase {
    constructor(...HYFStudents) {
      this.studentsList = HYFStudents
     }
    
  
    //method to add students and their details
    addStudentDetails(studentDetails) {
     const checkDuplicate = this.studentsList.filter(student => {
      return (
        student.name === studentDetails.name &&
        student.classId === studentDetails.classId
      );
    });
    console.log(checkDuplicate);
    if (checkDuplicate.length == 0) {
      console.log("no duplicate exist")
     this.studentsList.push(studentDetails);
     //console.log(this.studentsList)
     return "student added";
    } else {
      console.log(studentDetails.name + " already exist");
      return "student already exist";
    }
    }
  
    //method to get students list
    getStudentsList() {
      const studentsList = this.studentsList.map(student => {
        return { Name: student.name, email: student.email };
      });
      return studentsList;
     // console.log(studentsList);
    }
  
    //method to get student using classId
    getListByClass(classid) {
      const classList = this.studentsList.filter(student => {
        return student.classId == classid;
      });
      return classList;
      //console.log(classList);
    }
  
    //method to get student using name
    getStudentDetailByName(name) {
      const detailsForSpecificStudent = this.studentsList.filter(student => {
        return student.name == name;
      });
      return detailsForSpecificStudent;
    //   if (detailsForSpecificStudent.length === 0) {
    //     console.log("No such student present");
    //   } else {
    //     console.log(detailsForSpecificStudent);
    //   }
    }
  
    //method to edit student details through name
    editStudentInfo(studentInfo) {
    this.studentsList.forEach((student) => {
        if (student.name === studentInfo.name ) {
        //   console.log(index);
         this.student = studentInfo;
        //   console.log(this.studentsList[index]);
       
        }
      });
      return this.student;
    }
  }

  module.exports = HYFDataBase;