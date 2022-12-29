/// Programming construct in JS ///
console.log("Welcome to JS programming construct problem ")
///UC1 -> Sequence practice problems
//1.Use --> Random Function to get Single digit
//random function gives 0to0.9 nums.
let num=Math.floor(Math.random() * 10)
console.log("\n1.Single digit num ="+num)

//2.Use Random to get Dice Number between 1 to 6
let diceNum=Math.floor((Math.random()*6)+1)
console.log("\n2.dice number is ="+diceNum)

//3.Add two Random Dice Number and Print the Result
let diceNum1=Math.floor((Math.random()*6)+1)
let diceNum2=Math.floor((Math.random()*6)+1)
let add=diceNum1+diceNum2
console.log("\n3.Sum of two dice number is ="+add)

//4.Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
const num1 = Math.floor((Math.random()*(90)+10));
const num2 = Math.floor((Math.random()*(90)+10));
const num3 = Math.floor((Math.random()*(90)+10));
const num4 = Math.floor((Math.random()*(90)+10));
const num5 = Math.floor((Math.random()*(90)+10));
console.log( "\nNum1="+num1+" Num2="+num2+" Num3="+num3+" Num4="+num4+" Num5="+num5);
const sum = num1 + num2 +num3 + num4 + num5;
const avg=sum/5;
console.log("4.Sum of all given 5 random numbers is = " +sum+" Average="+avg);

//5.Unit Conversion
//1ft = 12 in then 42 in = ? ft  => 1in=1/12 ft
console.log("5 a.for 42 inches ft="+(42/12));

//Rectangular Plot of 60 feet x 40 feet in meters
//1 m = 3.281 ft
let a=60*40;
var plot=a/3.281;
console.log("Plot of 60 feet x 40 feet in meters is= "+ plot +"sq.mtr");
//Calculate area of 25 such plots in acres
console.log("Area of 25 plots in acres is = "+((25*plot)/4047) +" acres");
