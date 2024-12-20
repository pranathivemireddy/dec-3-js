// Question-1
a=prompt()
if(a=='basic'){
    console.log('Access to only free books')
}
else if(a=='standard'){
    console.log('Access to free books and discounted paid books')
}
else if(a=='Premium'){
    console.log('Access to all books, including exclusive content')
}
else{
    console.log('Invalid')
}

//Question-2
mtype=prompt()
amount=prompt()
if(mtype=='Regular' && amount<100){
    console.log('No discount for purchases under $100')
}
else if(mtype=='Regular' && (amount>=100 && amount<=500)){
    console.log(amount*5/100)
}
else if(mtype=='Regular' && amount>=500){
    console.log(amount*10/100)
}
else if(mtype=='VIP' && amount>=100){
    console.log(amount*10/100)
}
else if(mtype=='VIP' && (amount>=100 && amount<=500)){
    console.log(amount*15/100)
}
else if(mtype=='VIP' && amount>=500){
    console.log(amount*20/100)
}
else{
    console.log("Invalid membership or amount ")
}

//Question-3
gpa=prompt()
extracurricular=prompt()
service=prompt()
if(gpa>=3.5){
    console.log('You are Eligible for Merit-Scholarship')
}
else if(gpa>=3.0 && extracurricular==2){
    console.log('You are Eligible for Leadership-Scholarship')
}
else if(gpa>=2.5 && service>=100){
    console.log('You are Eligible for Community Service-Scholarship')
}
else{
    console.log('Student Qualifies for multiple scholarship')
}

//Question-4
day=prompt()
age=prompt()
if(day==(saturday||sunday) && (age>=65 && age<=12)){
    console.log('You receive a 30% discount')
    }
else{
    console.log('You receive 50% discount')
}

//Question-5
age=prompt()
maxlimit=prompt()
isValidmail=prompt()
if(maxlimit>100){
    console.log('No more registrations are accepted')
}
else if(age>=18 && isValidmail==true && maxlimit<100){
    console.log('You are allowed to register')
}
else{
    console.log('Please enter correct details')
}