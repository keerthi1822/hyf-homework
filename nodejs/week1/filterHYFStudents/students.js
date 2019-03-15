
  
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
        return { Name: student.name, email: student.email };
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
        if (student.name === studentInfo.name ) {
          console.log(index);
          this.studentsList[index] = studentInfo;
          console.log(this.studentsList[index]);
        }
      });
    }
  }
  
  //creating instance of class 'HYFDataBase'
 
  //creating instances for class Student
 
  const HYFStudents = new HYFDataBase( {   "name": "Hakki",   "classId": 07,   "email": "adahbour54@gmail.com",   "phone": "(263) 972-6043" },
  {   "name": "Keerthika devi Alampalli",   "classId": 08,   "email": "adahbour54@gmail.com",   "phone": "(745) 285-6338" },
  {   "name": "Rieko",   "classId": 07,   "email": "adahbour54@gmail.com",   "phone": "(971) 436-6442" },
  {   "name": "Sheila Qasemi",   "classId": 08,   "email": "virginrashed4@gmail.com",   "phone": "(457) 527-9154" },
  {   "name": "Virgeen",   "classId": 07,   "email": "virginrashed4@gmail.com",   "phone": "(259) 245-5777" },
  {   "name": "Abod",   "classId": 07,   "email": "a-hassam@outlook.com",   "phone": "(939) 553-4886" },
  {   "name": "Ivan Gray",   "classId": 06,   "email": "mis@sazuja.pm",   "phone": "(548) 420-7322" },
  {   "name": "Gordon Fields",   "classId": 08,   "email": "wogzijpeg@jusvijsut.lb",   "phone": "(970) 482-1032" },
  {   "name": "Mitchell Byrd",   "classId": 09,   "email": "mucipok@dul.dz",   "phone": "(480) 835-5405" },
  {   "name": "Agnes Barton",   "classId": 07,   "email": "udirulu@kimvuzev.mp",   "phone": "(781) 210-4210" }
);
  

  
  //logout Array of studentsDetails
  console.log("Here are some HYF-Students Details");
  console.log(HYFStudents);
  
  //Getting list of all HYF-students
  console.log("List of HYF students");
  HYFStudents.getStudentsList();
  
  //getting  studentsList by classId
  console.log("students from class 07");
  HYFStudents.getListByClass("07");
 
  
  //getting students by name
  HYFStudents.getStudentDetailByName("Sana");
  HYFStudents.getStudentDetailByName("Sheila Qasemi");
  
  //edit student details
  console.log("editted student info");
  HYFStudents.editStudentInfo( { name: 'Hakki',
  classId: 8,
  email: 'adahbour4@gmail.com',
  phone: '(263) 972-6043' });
  
  
  //print students after editing
  //console.log(HYFStudents);






  // const keerthi = new Student("Keerthi", "08", "kkk@mail.com", "7777777");
  // const kseina = new Student("Kseina", "08", "ksss@mail.com", "333333");
  // const yana = new Student("Yana", "07", "yyy@mail.com", "44444");
  // const zoe = new Student("Zoe", "06", "zzzz@mail.com", "222222");
  // const badr = new Student("Badr", "07", "BBB@mail.com", "555555");
  // const swapna = new Student("Swapna", "09", "ssss@mail.com", "66666");
  // const sana = new Student("Sana", "08", "sna@mail.com", "999999");
  // const sharmila = new Student("Sharmila", "07", "Sharmila@mail.com", "111111");
  // const adil = new Student("Adil", "08", "AAA@mail.com", "8888888");

    //adding student details to HYFDataBase
 // HYFStudents.addStudentDetails(keerthi);
  // HYFStudents.addStudentDetails(badr);
  // HYFStudents.addStudentDetails(kseina);
  // HYFStudents.addStudentDetails(yana);
  // HYFStudents.addStudentDetails(zoe);
  // HYFStudents.addStudentDetails(swapna);
  // HYFStudents.addStudentDetails(sana);
  // HYFStudents.addStudentDetails(sharmila);
  // HYFStudents.addStudentDetails(adil);