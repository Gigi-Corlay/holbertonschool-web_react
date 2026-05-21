import { Teacher } from "./Teacher";

export class Subject {
    teacher!: Teacher;

    set setTeacher(teacher: Teacher) {
        this.teacher = teacher;
    }
}
