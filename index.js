let student = {
    name: "Pushkar mavale",
    rollno: 45,
    division: "D15A",
    age: "20",
}
console.log("Student object: ", {student})
    // using class
class Student {
        constructor(name, rollno, division, age) {
            this.name = name;
            this.rollno = rollno;
            this.division = division;
            this.age = age;
        }
}
let student1 = new Student("Pushkar", 45, "D15A", "20");
console.log("Student (object through constructor): ", {student1})
function validate() {
        const check = document.getElementById("validateThis").value;
        console.log(check);
        if (isNaN(check) || check <= 0) {
            alert("Invalid input")
            throw new Error("Invalid Input ");
        } else {
            u=document.querySelector(".k")
            u.innerHTML="<h1>Roll no is valid. Your roll no is "+check+"</h1>"
            console.log("Valid");
        }
 }