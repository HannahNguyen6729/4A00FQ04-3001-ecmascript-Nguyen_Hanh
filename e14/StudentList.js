module.exports = class StudentList {
  constructor() {
    this.stList = [];
  }
  addStudent(newStudent) {
    this.stList.push(newStudent);
  }
  removeStudent(_id) {
    for (let i = 0; i < this.stList.length; i++) {
      if (this.stList[i].id == _id) {
        this.stList.splice(i, 1);
      }
    }
  }
};
