function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    if(num2!=0){
        return num1/num2;
    }
    else{
        console.log("division not possible");
    }
}
function calculator(){
    let num1=parseFloat(prompt("Enter num1:"));
    let num2=parseFloat(prompt("Enter num2:"));
    let operation=prompt("Enter operation(+,-,*,/):");
    let result;
    switch(operation){
        case '+':result=add(num1,num2);
        break;
        case '-':result=sub(num1,num2);
        break;
        case '*':result=mul(num1,num2);
        break;
        case '/':result=div(num1,num2);
        break;
        default:console.log("Invalid input");
    }
    console.log(result);
}

calculator();