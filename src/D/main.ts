/*
    Dependency inversion Principle (DIP) is one
    of the five SOLID principles of object-oriented design.
    It states that high-level modules should not depend 
    on low-level modules; both should depend on abstractions. 
    This principle helps to reduce the coupling between 
    different parts of a system, making it easier to change 
    and maintain.

    Los modulos los podemos identificar segun el core de lo
    que hagan. Hay modulos que son core, que son principales
    para la logica de negocio y otros tipos de core que dan 
    soporte a esa logica de negocio.

*/

class JavascriptStudent{
    learnJavascript() {
        console.log("Learning Javascript");
    }
}

class ReactStudent{
    learnReact() {
        console.log("Learning React");
    }
}

// ❌
class Teacher {
    private student: JavascriptStudent;
    constructor(){
        this.student = new JavascriptStudent();
    }

    teachJavascript() {
        this.student.learnJavascript();
    }
}

// ✅ Correct way.
interface Student{
    learn():void;
}

class GoStudent implements Student {
    learn() {
        console.log("Learning Go");
    }
}

class PythonStudent implements Student {
    learn() {
        console.log("Learning Python");
    }
}

class TeacherWithDIP {
    constructor(private student: Student){}

    teach(){
        this.student.learn();
    }
}

const goStudent = new GoStudent();
const pythonStudent = new PythonStudent();
const teacherWithDIP = new TeacherWithDIP(goStudent);
// Que yo le pase un estudiante de Go o Python da igual, 
// lo importante es que cumplan con la interfaz Student.
// La clase Teacher(high-level modules) no depende de clases concretas
// como GoStudent o PythonStudent (low-level modules),
// sino depende de una abstracción (la interfaz Student).

