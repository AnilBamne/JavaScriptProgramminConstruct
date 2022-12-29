///  Selection ///
//Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
//range variables
var min=100
var max=1000
//function for getting random num between range
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min) ) + min;
}
let num1 =getRndInteger(min,max);
let num2 =getRndInteger(min,max);
let num3 =getRndInteger(min,max);
let num4 =getRndInteger(min,max);
let num5 =getRndInteger(min,max);
//compute max and min ,Inbuilt functions
const maxNum=Math.max(num1,num2,num3,num4,num5);
const minNum=Math.min(num1,num2,num3,num4,num5);
console.log("num1="+num1+"\nnum2="+num2+"\nnum3="+num3+"\nnum4="+num4+"\nnum5="+num5);
console.log("maximum number is="+maxNum+" minimum number is="+minNum);
