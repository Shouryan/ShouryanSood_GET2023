function student(name, age, gender)
{
    this.student_name=name;
    this.student_age=age;
    this.student_gender=gender;
}
let obj1= new student('Pankaj','23','Male');
let obj2= new student('Reena','25','Female');
let obj3= new student('Rajeev','26','male');
console.log(obj1);
console.log(obj2);
console.log(obj3);
student.prototype.branch="cse";
student.prototype.college="abc";
console.log(obj1.branch);
console.log(obj2.branch);
console.log(obj3.branch);
console.log(obj1.college);
console.log(obj2.college);
console.log(obj2.college);