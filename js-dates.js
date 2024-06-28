// JS DATE 
// 1
document.write(new Date() + "<br>")
// 2
document.write(new Date("2022 , 10 , 12:19:20") + "<br>")
// 3
document.write(new Date(2018, 11, 24,) + "<br>");
// 4
var a = new Date();
document.write(a.toDateString() + "<br>");
// 5
document.write(new Date("07/07/2001") + "<br>");
// 6
var a = new Date();
document.write(a.getFullYear() + "<br>");
// 7
var text = "";
var Today = new Date();
var SomeDay = new Date();
SomeDay.setFullYear(2024 , 5 , 26);
if(SomeDay > Today){
    text = "it is after Today Date"
}
else if(SomeDay = Today){
    text = "it is Today's Date"
}
else{
    text = "it is Before Today Date"
}
document.write(text)


// MATH IN JAVASCRIPT
document.write("Math in JavaScript");
