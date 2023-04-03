let number = 3; //1
while (number <= 30) {
    console.log(number);
    number += 1;
}
let num = 5;  //2
while (num >= -10) {
    console.log(num);
    num -= 1;
}


let input = Number(prompt("enter num"));  //3
while (input !== 0) {
    input = Number(prompt("enter num"));
}
console.log(input);
