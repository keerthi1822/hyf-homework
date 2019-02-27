//creating class for student information
/* class Student {
  constructor(name, classId, email, phone) {
    this.name = name;
    this.classId = classId;
    this.email = email;
    this.phone = phone;
  }
} */

//creating class for HYFDatabase
class HYFStudentDataBase {
  constructor(studentsDetails) {
    this.studentsList = [];
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
    if (checkDuplicate == 0) {
      this.studentsList.push(studentDetails);
    } else {
      console.log(studentDetails.name + " already exist");
    }
  }

  //method to get students list
  getStudentsList() {
    const studentsList = this.studentsDetails.map(student => {
      return { Name: student.name, classid: student.classId };
    });
    console.log(studentsList);
  }

  //method to get student using classId
  getListByClass(classid) {
    const classList = this.studentsList.filter(student => {
      return student.classId == classid;
    });
    console.log(classList);
  }

  //method to get student using name
  getStudentDetailByName(name) {
    const detailsForSpecificStudent = this.studentsList.filter(student => {
      return student.name == name;
    });
    if (detailsForSpecificStudent.length === 0) {
      console.log("No such student present");
    } else {
      console.log(detailsForSpecificStudent);
    }
  }

  //method to edit student details through name
  editStudentInfo(studentInfo) {
    this.studentsList.forEach((student, index) => {
      if (student.name === studentInfo.name) {
        console.log(index);
        this.studentsList[index] = studentInfo;
      }
    });
  }
}

//creating instance of class 'HYFDataBase'
const HYFStudents = new HYFStudentDataBase();
//creating instances for class Student
HYFStudents.addStudentDetails({
  name: "Keerthi",
  classId: "08",
  email: "kkk@mail.com",
  phone: "7777777"
});
HYFStudents.addStudentDetails({
  name: "Kseina",
  classId: "08",
  email: "ksss@mail.com",
  phone: "333333"
});
HYFStudents.addStudentDetails({
  name: "Zoe",
  classId: "06",
  email: "zzzz@mail.com",
  phone: "222222"
});
HYFStudents.addStudentDetails({
  name: "Yana",
  classId: "07",
  email: "yyy@mail.com",
  phone: "44444"
});

//logout Array of studentsDetails
console.log("Here are some HYF-Students Details");
console.log(HYFStudents);

//Trying to add already existing student details
HYFStudents.addStudentDetails({
  name: "Keerthi",
  classId: "08",
  email: "kkk@mail.com",
  phone: "7777777"
});//should log 'keerthi  already exist'

//Getting list of all HYF-students
/* console.log("List of HYF students");
HYFStudents.getStudentsList(); */

//getting  studentsList by classId
console.log("students from class 07");
HYFStudents.getListByClass("07");
console.log("students from class 08");
HYFStudents.getListByClass("08");
console.log("students from class 09");
HYFStudents.getListByClass("09");
console.log("students from class 06");
HYFStudents.getListByClass("06");

//getting students by name
HYFStudents.getStudentDetailByName("Sana");
//trying to get details of student who is not in the HYF list
HYFStudents.getStudentDetailByName("Ss");//logout "No such student present"

//edit student details
console.log("editted student info");
HYFStudents.editStudentInfo({
  name: "Keerthi",
  classId: "07",
  email: "kk@mail.com",
  phone: "7777777"
});
HYFStudents.editStudentInfo({
  name: "Zoe",
  classId: "07",
  email: "zzzz@mail.com",
  phone: "222222"
});

//print students after editing
console.log(HYFStudents);


