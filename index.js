let Student1 = {
    name: "Pushkar mavale",
    rollno: 45,
    division: "D15A",
    age: "20",
}
console.log("Student object through literal syntax: ", {Student1})
    // using class
class student2 {
        constructor(name, rollno, division, age) {
            this.name = name;
            this.rollno = rollno;
            this.division = division;
            this.age = age;
        }
}

let Student2 = new student2("Pushkar", 45, "D15A", "20");

student2.prototype.school="Xaviers";

console.log("Student object through constructor: ", {Student2})




function validate() {
        const check = document.getElementById("validateThis").value;
        console.log(check);
        if (isNaN(check) || check <= 0) {
            u=document.querySelector(".k")
            u.innerHTML="Please check your input"
            throw new Error("Invalid Input ");
        } else {
            u=document.querySelector(".k")
            u.innerHTML="<h1>Roll no is valid. Your roll no is "+check+"</h1>"
            console.log("Valid");
        }
 }