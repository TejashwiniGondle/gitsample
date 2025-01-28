// Create a Person object with properties like name, age, and a method greet() that prints a greeting message.
function person(name,age){
        this.name=name;
        this.age=age;
        this.greet=function(){
        console.log("hi "+this.name);
        }
}
let p=new person("Tejashwini",1);
p.greet()