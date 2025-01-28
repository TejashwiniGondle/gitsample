//Create a Student constructor function with properties like name, grade, and a method study(). Add a getGrade() method to get the student's grade.
function student(name,grade){
        this.name=name;
        this.grade=grade;
        this.study=function(){
            console.log(this.name+" is studying");
        }
        this.getGrade=function(){
            return this.grade;
        }
}
let s=new student("John",90);
s.study();
console.log(s.getGrade());