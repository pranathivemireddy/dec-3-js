//Question-1
var grade='A';
var attendance=75;
var res=(grade=='A'&&attendance==75)?'Eligible':'Not Eligible';
console.log(res);

//Question-2
var a=20;
var res=(a<13)?'Child':(a>13 && a<19)? 'Teenager':'Adult';
console.log(res);

//Question-3
var isLoggedIn = true;
var sessionActive = true; 
var res = isLoggedIn && sessionActive ? "Welcome Back" : "Please Log In";
console.log(res);

//Question-4
var score = 85;
var grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "Fail";
console.log(`Grade: ${grade}`);

//Question-5
var price = 120;
var discount = price > 100 ? 20 : 10;
console.log(`Discount: ${discount}%`);