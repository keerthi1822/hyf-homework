//creating class for student information
class Student {
  constructor(name, classId, email, phone) {
    this.name = name;
    this.classId = classId;
    this.email = email;
    this.phone = phone;
  }
}

class HYFDataBase {
  constructor(studentsDetails) {
    this.studentsDetails = studentsDetails;
  }
  addStudentDetails(studentDetails) {
    this.studentsDetails.push(studentDetails);
    console.log(this.studentsDetails)
  }
  getStudentsList() {
    const studentsList = this.studentsDetails.map(student => {
      return { Name: student.name, classid: student.classId };
    });
    console.log(studentsList);
  }

  getListByClass(classid){
      const classList = this.studentsDetails.filter((student)=>{
          return (student.classId == classid)
      });
      console.log(classList);
  }
  getStudentDetailByName(name){
    const detailsForSpecificStudent = this.studentsDetails.filter((student)=>{
        return (student.name == name)
    });
    console.log(detailsForSpecificStudent); 
  }
}
//creating instance of class 'HYFDataBase'
const HYFStudents = new HYFDataBase([]);
//creating instances for class Student
const keerthi = new Student("Keerthi", "08", "kkk@mail.com", "777777");
const kseina = new Student("Kseina", "08", "ksss@mail.com", "333333");
const yana = new Student("Yana", "07", "yyy@mail.com", "44444");
const zoe = new Student("Zoe", "06", "zzzz@mail.com", "222222");
const badr = new Student("Badr", "07", "BBB@mail.com", "555555");
const swapna = new Student("Swapna", "09", "ssss@mail.com", "66666");
const sana = new Student("Sana", "08", "sna@mail.com", "999999");
const sharmila = new Student("Sharmila", "07", "Sharmila@mail.com", "111111");
const adil = new Student("Adil", "08", "AAA@mail.com", "8888888");

//adding student details to HYFDataBase
HYFStudents.addStudentDetails(keerthi);
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
console.log('List of HYF students');
HYFStudents.getStudentsList();

//getting  studentsList by classId
console.log('students from class 07');
HYFStudents.getListByClass('07');
console.log('students from class 08');
HYFStudents.getListByClass('08');
console.log('students from class 09');
HYFStudents.getListByClass('09');
console.log('students from class 06');
HYFStudents.getListByClass('06');

HYFStudents.getStudentDetailByName('Sana');
HYFStudents.getStudentDetailByName('Swapna');
