


let studentsJson = [
    {
      "name": "Sheila",
      "email": "shia@mail.com",
      "classId": "08",
      "phone" : "234266"
 
    },
    {
      "name": "Natalia",
      "email": "natalia@mail.com",
      "classId": "08",
      "phone": "934566"
 
    },
    {
      "name": "Keerthika",
      "email": "ka@mail.com",
      "classId": "08",
      "phone": "034566"
 
    },
    {
      "name": "Khan",
      "email": "khan@mail.com",
      "classId": "07",
      "phone": "934566"
 
    },
    {
      "name": "Ali",
      "email": "ali@mail.com",
      "classId": "07",
      "phone": "834566"
 
    },
    {
      "name": "Semon",
      "email": "Semo@mail.com",
      "classId": "09",
      "phone": "534566"
 
    }
 
  ]

const students = JSON.parse(studentsJson);

/* fetch("students.json")
  .then(response => response.json())
  .then(data => {
    console.log(data); //list of students
  }); */

class StudentBook {
  constructor(name, email, classId, phone) {
    this.name = name;
    this.email = email;
    this.classId = classId;
    this.phone = phone;
  }
  //method to show list of students
  getList(){
      console.log(students);
  }
  getListByClass(classId) {
   
    students.filter((student)=>{
    return (student.classId===classId)
   })
   
  }
}

let hyf_students = new StudentBook();
//console.log(hyf_students);
hyf_students.getList();

hyf_students.getListByClass("08");
