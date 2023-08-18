let x = 2
if (x > 0) {
    console.log("true");
}
if (x == 0){
    console.log("default");
}
if (x < 0) {
    console.log("false")
}
console.log('-------------------------------------');
let time = 24;

if (time<=15 && time>0){
    console.log('1/4');
}
if (time <= 30 && time > 15) {
    console.log('2/4');
}
if (time <= 45 && time > 30) {
    console.log('3/4');
}
if (time <= 60 && time > 45) {
    console.log('4/4');
}
if (time > 60 || time < 0) {
    console.log('invalid value')
}
console.log('-------------------------------------');
let day = 10;
if (day <= 10 && day > 0){
    console.log('1/3');
}
if (day <= 20 && day > 10) {
    console.log('2/3');
}
if (day <= 31 && day > 20) {
    console.log('3/3');
}
if (day > 31 || day < 0) {
    console.log('invalid value');
}