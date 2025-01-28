function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}
function toFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit: "));
let celsius = parseFloat(prompt("Enter temperature in celsius: "));

console.log(toCelsius(fahrenheit));
console.log(toFahrenheit(celsius));