function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

function Course(name, department, credits, timeblock, days) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.timeblock = timeblock;
  this.days = days;
}

Student.prototype.name = function () {
  return this.fname + " " + this.lname;
};
Course.prototype.conflictsWith = function (otherCourse) {
  return (otherCourse.days.some ( day => this.days.includes(day) ) &&
  (this.timeblock === otherCourse.timeblock));
};


Student.prototype.hasConflict = function (newCourse) {
  return this.courses.some(course => {
    return course.conflictsWith(newCourse);
  });
};
Student.prototype.enroll = function (course) {
  if (!this.hasConflict(course)) {
    this.courses.push(course);
  }
  else {
    throw "Course conflict";
  }
};


Student.prototype.courseLoad = function () {
  let courseload = {};
  this.courses.forEach( course => {
    courseload[course.department] = (courseload[course.department] || 0) + course.credits;
  });
  return courseload;
};

Student.prototype.name = function () {
  return this.fname + " " + this.lname;
};

Course.prototype.addStudent = function (student) {
  student.enroll(this);
};




let bob = new Student("bob", "jones");
let sally = new Student("sally", "jones");
let cs101 = new Course("cs101", "cs", "3", 1, ["monday","friday"]);
let cs102 = new Course("cs102", "cs", "3", 1, ["tuesday","friday"]);
let cs103 = new Course("cs103", "cs", "3", 1, ["tuesday","wednesday"]);
bob.enroll(cs101);
console.log(bob.hasConflict(cs102));
bob.enroll(cs103);
console.log(bob.courses);
console.log(cs101.conflictsWith(cs102));
console.log(bob.hasConflict(cs102));
