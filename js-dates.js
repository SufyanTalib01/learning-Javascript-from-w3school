// // JS DATE 
// // 1
// document.write(new Date() + "<br>")
// // 2
// document.write(new Date("2022 , 10 , 12:19:20") + "<br>")
// // 3
// document.write(new Date(2018, 11, 24,) + "<br>");
// // 4
// var a = new Date();
// document.write(a.toDateString() + "<br>");
// // 5
// document.write(new Date("07/07/2001") + "<br>");
// // 6
// var a = new Date();
// document.write(a.getFullYear() + "<br>");
// // 7
// var text = "";
// var Today = new Date();
// var SomeDay = new Date();
// SomeDay.setFullYear(2024 , 5 , 26);
// if(SomeDay > Today){
//     text = "it is after Today Date"
// }
// else if(SomeDay = Today){
//     text = "it is Today's Date"
// }
// else{
//     text = "it is Before Today Date"
// }
// document.write(text);


// // MATH IN JAVASCRIPT
// document.write("<br>" + "<b>" + "Math in JavaScript" + "</b>" + "<br>");

// document.write(Math.PI + "<br>");
// document.write(Math.E + "<br>");
// document.write(Math.SQRT2 + "<br>");
// document.write(Math.round(434.5) + "<br>");
// document.write(Math.ceil(4.3)+ "<br>");
// document.write(Math.floor(4.7)+ "<br>");
// document.write(Math.trunc(4.7)+ "<br>");
// document.write(Math.sign(-42)+ "<br>");
// document.write(Math.pow(5,2)+ "<br>");
// document.write(Math.sqrt(81)+ "<br>");
// document.write(Math.abs(-81)+ "<br>");
// document.write(Math.abs(-81)+ "<br>");
// document.write(Math.min(10 , 20 , 5 , -20 , 100 , -2)+ "<br>");
// document.write(Math.max(10 , 20 , 5 , -20 , 100 , -2)+ "<br>");
// document.write(Math.random()+ "<br>");
// document.write(Math.floor(Math.random() * 3) + 1);

// // function
// // random nmbr 
// // min 1
// // max 100
// // ok

// function Btn(){
//     let x = Math.floor(Math.random() * 100) + 1;
//     document.getElementById("para").innerHTML = x;
// }

// var a = 10;
// document.write("<b>" + "</br>" + a++ + "</br>");
// document.write(++a + "</br>");
// document.write(--a + "</br>");
// document.write(a-- + "</br>");
// document.write(a + "</br>");
// document.write(a-- + "</br>");
// document.write(a + "</br>");

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   // Create an Array
//   const myArray = JSON.stringify(person);
  
// document.write(myArray + "<br>");

// var age = 20;
// if (age < 18){
//     document.write("You're too young")
// }
// else{
//     document.write("You can get admission here")
// }

// let Input = document.getElementById("Input");
// function TryBtn(){
//     let Voteable = (Input.value > 18) ? "You can get Admission" : "You are too young"
//     document.getElementById('para1').innerHTML = Voteable;
// }

// Logical Operators 
let Logic = age(a<18 && a>=30) ? "you are eligle" : "you re too young";
document.write("hello");
