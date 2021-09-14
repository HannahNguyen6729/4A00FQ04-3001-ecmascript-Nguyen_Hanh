// Once again, create new project, use eslint. Create simple database app, where you store student information in an array. Each student has name and student id.
// User can add, remove and display students.
// import { Student } from "./Student.js";
// import { StudentList } from "./StudentList.js";
let Student = require("./Student.js");
let StudentList = require("./StudentList.js");

let studentList = new StudentList();

let menu = () => {
  console.log("[1] Add ");
  console.log("[2] Remove");
  console.log("[3] Display");
  console.log("[0] CANCEL");
};

let flag = true;
do {
  menu();
  let readlineSync = require("readline-sync");
  //wait for the user  answers
  let number = readlineSync.questionInt("Choice? [1, 2, 3, 0]:");

  switch (number) {
    case 1:
      var studentName = readlineSync.question("May I have student name?");
      var st = new Student(studentName);
      studentList.addStudent(st);
      for (let i = 0; i < studentList.stList.length; i++) {
        studentList.stList[i].id = i;
      }
      //console.log(studentList.stList);
      break;

    case 2:
      var id = readlineSync.questionInt("May I have ID?");
      if (Number.isInteger(id)) {
        studentList.removeStudent(id);
      }
      break;

    case 3:
      console.log("List of students:");
      console.log("O-----------------------O----------------O");
      console.log("| Student ID Number" + "\t Student Name \t |");
      console.log("O-----------------------O----------------O");
      for (let i = 0; i < studentList.stList.length; i++) {
        let stId = studentList.stList[i].id;
        let stName = studentList.stList[i].name;
        console.log("| " + stId + "\t \t \t" + "| " + stName + "\t \t |");
      }
      console.log("O-----------------------O----------------O");
      //console.log(studentList.stList);
      break;

    case 0:
      flag = false;
      break;

    default:
      console.log("please choose the number again");
      break;
  }
} while (flag);
