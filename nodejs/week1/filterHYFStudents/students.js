//creating class for student information
class Student {
    constructor(name, classId, email, phone) {
      this.name = name;
      this.classId = classId;
      this.email = email;
      this.phone = phone;
    }

   /*  sendEmail() {
        
    }
 */
  }
  
  //creating class for HYFDatabase
  class HYFDataBase {
    constructor(studentsDetails) {
      this.studentsList = studentsDetails;
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
      const studentsList = this.studentsList.map(student => {
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
 
  //creating instances for class Student
  const keerthi = new Student("Keerthi", "08", "kkk@mail.com", "7777777");
  const kseina = new Student("Kseina", "08", "ksss@mail.com", "333333");
  const yana = new Student("Yana", "07", "yyy@mail.com", "44444");
  const zoe = new Student("Zoe", "06", "zzzz@mail.com", "222222");
  const badr = new Student("Badr", "07", "BBB@mail.com", "555555");
  const swapna = new Student("Swapna", "09", "ssss@mail.com", "66666");
  const sana = new Student("Sana", "08", "sna@mail.com", "999999");
  const sharmila = new Student("Sharmila", "07", "Sharmila@mail.com", "111111");
  const adil = new Student("Adil", "08", "AAA@mail.com", "8888888");
  const HYFStudents = new HYFDataBase([keerthi]);
  
  //adding student details to HYFDataBase
 // HYFStudents.addStudentDetails(keerthi);
  HYFStudents.addStudentDetails(badr);
  HYFStudents.addStudentDetails(kseina);
  HYFStudents.addStudentDetails(yana);
  HYFStudents.addStudentDetails(zoe);
  HYFStudents.addStudentDetails(swapna);
  HYFStudents.addStudentDetails(sana);
  HYFStudents.addStudentDetails(sharmila);
  HYFStudents.addStudentDetails(adil);
  
  //logout Array of studentsDetails
  console.log("Here are some HYF-Students Details");
  console.log(HYFStudents);
  
  //Getting list of all HYF-students
  console.log("List of HYF students");
  HYFStudents.getStudentsList();
  
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
  HYFStudents.getStudentDetailByName("Ss");
  
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