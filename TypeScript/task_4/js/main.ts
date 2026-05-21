import { Subject } from "./subjects/Subject";
import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";
import { Teacher } from "./subjects/Teacher";

// Création d'un professeur
const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 3,
  experienceTeachingJava: 5,
};

// Cpp
const cpp = new Cpp();
cpp.setTeacher = teacher;

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java
const java = new Java();
java.setTeacher = teacher;

console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React
const react = new React();
react.setTeacher = teacher;

console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
