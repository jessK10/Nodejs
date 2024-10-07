console.log("test from Node")

const student = {
    name: "Marie",
    age: 20,
    courses: [],
    
}
console.log(student);

student.age = 21;
student.grade = "A";
console.log(student);

const courses = []
courses.push("Math", "Physics", "Chemistry");
console.log(courses);
console.log(student);

const physicsIndex = student.courses.indexOf("physics");

const firstTwoCourses = student.courses.slice(0.2);

console.log("modified student object: ",student);

console.log  ("Index of physics:", physicsIndex);

console.log("First two courses:", firstTwoCourses);













