/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import "./subjects/Teacher";
import "./subjects/Subject";
import "./subjects/Cpp";
import "./subjects/Java";
import "./subjects/React";

// =======================
// CPP
// =======================
const cpp = new Subjects.Cpp();

// =======================
// JAVA
// =======================
const java = new Subjects.Java();

// =======================
// REACT
// =======================
const react = new Subjects.React();

// =======================
// TEACHER
// =======================
const teacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
  experienceTeachingJava: 10,
  experienceTeachingReact: 10,
};

// assign teacher
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
