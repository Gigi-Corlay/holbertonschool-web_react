/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

const teacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
};

// =======================
// SET TEACHER
// =======================
cpp.setTeacher(teacher);
java.setTeacher(teacher);
react.setTeacher(teacher);

// =======================
// TESTS CPP
// =======================
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// =======================
// TESTS JAVA
// =======================
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// =======================
// TESTS REACT
// =======================
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
