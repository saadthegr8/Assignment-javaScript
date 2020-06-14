
// //Chapter 2 start
// //Question 1

// var username;

// //Question 2

// var myName = "Saad Mahmood";

// Question 3

// var message = "Hello World"
// alert(message);

// Question 4

// var name = "Jhone Doe";
// var age = "15 years old";
// var course = "Certified Mobile Application Development"

// alert(name);
// alert(age+" "+"years old");
// alert(course);

// Question 5

// var message = "PIZZA\nPIZZ\nPIZ\nPI\nP  "
// alert(message);

// Question 6

// var email = "saadmahmod18@gmail.com"
// alert("My email address is "+email)

// Question 7

// var book = "A Smarter way to learn JavaScript"
// alert("I am trying to learn from the Book "+book);

//Question 8 

// document.write("Yah! I can write HTML content Through JavaScript");

//Question 9

// alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");

//Chapter 3 start 

//Question 1

// var age = "I am 15 years old";
// alert(age); 

//Question 2

// var visit = +prompt("");
// alert("You have visited this site "+visit+" times");

//Question 3

// var birthYear = +prompt("");
// document.write("My birth year is "+birthYear+"\nData type of my ddeclared variable is number");

//Question 4

// var Visitor_name = "John Doe"; 
// var Product_title = "5 T-shirt(s)";
// var Quantity = "XYZ Clothing store";
// document.write(Visitor_name+" ordered "+Product_title+" on "+Quantity);

//Chapter 4 start
// Question 1 
// var one,two,three;

//Question 2

// 5 illegal varibales
// var 1One;
// var 123student;
// var 345;
// var import;
// var @jinaid;

// 5 legal varibales
// var _123student;
// var student;
// var course123;
// var $tudent;
// var junaid_hamid;

//Question 3 
// document.write("Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable <br>");
// document.write("Variables must begin with a ______, ______ or _____. For example $name, _name or name <br>");
// document.write("Variable names are case _________ <br>");
// document.write("Variable names should not be JS _________");

//Chapter 5 start

//Question 1
// var value1 = 5;
// var value2 = 13;
// var sum = value1 + value2;
// document.write("Sum of "+value1+" and "+value2+" is "+sum);

//==== Chapter # 5 and Task # 2

// var value1 = 5;
// var value2 = 13;
// var sum = value1 - value2;
// document.write("Sum of "+value1+" and "+value2+" is "+sum);

// var value1 = 5;
// var value2 = 13;
// var sum = value1 * value2;
// document.write("Sum of "+value1+" and "+value2+" is "+sum);

// var value1 = 5;
// var value2 = 13;
// var sum = value1 / value2;
// document.write("Sum of "+value1+" and "+value2+" is "+sum);

// var value1 = 5;
// var value2 = 13;
// var sum = value1 % value2;
// document.write("Sum of "+value1+" and "+value2+" is "+sum);

//==== Chapter # 5 and Task # 4
// var ticket=600;
// var number_of_ticket=5;
// var sum=ticket*number_of_ticket;
// document.write("<h1>Total cost of buy "+number_of_ticket+" tickets to a movie is "+sum+"RKP");


//==== Chapter # 5 and Task # 5

// var table_value=+prompt("Which table do you want to print");
// document.write("<h1>Table of "+table_value+"</br></h1>");
// var i;

// for (i = 1; i<=10; i++){
// document.write(table_value+" x "+i+" = "+table_value*i +"</br>");
// }

//==== Chapter # 5 and Task # 6

// var celsius_temp = +prompt("Enter Celsius Temperature");
// var Fahrenhait_temp = +prompt("Enter Fahrenhait Temperature")
// var c = (Fahrenhait_temp - 32) * 5 / 9;
// var f = (celsius_temp * 9 / 5) + 32;

// document.write(celsius_temp+"C is"+f+"F"+"</br>");
// document.write(Fahrenhait_temp+"F is"+c+"C"+"</br>");

//==== Chapter # 5 and Task # 7
// document.write("<h1>Shopping Card</h1>"+"</br>");

// var item1_quantity=+prompt("Enter Item 1 Quantity");
// var item2_quantity=+prompt("Enter Item 2 Quantity");
// var a = 650 * item1_quantity;
// var b = 100 * item2_quantity;
// var total = a+b+100;

// document.write("Price of item 1 is 650 </br>");
// document.write("Quantity of item 1 is "+item1_quantity+"</br>");
// document.write("Price of item 2 is 100"+"</br>");
// document.write("Quantity of item 2 is "+item2_quantity+"</br>");
// document.write("Shopping Charges 100</br>");

// document.write("Total Cost of your order is "+total);

//==== Chapter # 5 and Task # 8

// var total_marks = 980;
// var obtain_marks = 804;
// var per = (804/980)*100;
// document.write("Total marks: "+total_marks+"</br>");
// document.write("Marks obtained: "+obtain_marks+"</br>");
// document.write("Percentage: "+per+"%");

//==== Chapter # 5 and Task # 9
// document.write("<h1>Currency in PKR</h1>"+"</br>");
// var US_Dollar = 104.80;
// var Saudi_Riyal = 28;
// var Quantity_of_Dollar = 10;
// var Quatity_Riyal= 25;

// var convt1 = US_Dollar*Quantity_of_Dollar;
// var convt2 = Saudi_Riyal*Quatity_Riyal;

// var sum=convt1+convt2;
// document.write("Total Currency in PKR:"+sum);

//==== Chapter # 5 and Task # 10
// var number = 25;
// var result = (((25+5)*10)/2)
// document.write(result);

//==== Chapter # 5 and Task # 11

// document.write("<h1>Age Calculator</h1>"+"</br>");
// var current_year=2016;
// var birth_Year=1992;
// age = current_year-birth_Year;

// document.write("Current Year: "+current_year+"</br>");
// document.write("Birth Year: "+birth_Year+"</br>");
// document.write("Your Age is: "+age+"</br>");

//==== Chapter # 5 and Task # 12

// document.write("<h1>The Geometrizer</h1>"+"</br>");
// var radious=20;
// var pi = 3.142;
// var circumference = 2*pi*radious;
// var area_of_circle = pi*(radious*radious);

// document.write("Radious of a circle: "+radious+"</br>");
// document.write("The circumference is: "+circumference+"</br>");
// document.write("The area is: "+area_of_circle+"</br>");

//==== Chapter # 6-9 and Task # 1

// document.write("<h1>Result;</h1>"+"</br>");
// var a=10;
// var result;
// var a = c,d,e,f;


// // var c = ++a; 
// // var d = a++;
// // var e = --a;
// // var f = a--;

// document.write("The Value of a is: "+a +"</br>"+"</br>");

// document.write("The value of ++a is: "+a+"</br>");
// document.write("Now the value of a is: "+ c +"</br>"+"</br>");

// document.write("The value of a++ is: "+a+"</br>");
// document.write("Now the value of a is: "+ d +"</br>"+"</br>");

// document.write("The value of a-- is: "+a+"</br>");
// document.write("Now the value of a is: "+ e +"</br>"+"</br>");

// document.write("The value of --a is: "+a+"</br>");
// document.write("Now the value of a is: "+ f +"</br>"+"</br>");

//==== Chapter # 6-9 and Task # 2

// var a = 2, b = 1;
// var result1 = --a;
// var result2 = --a - --b;;
// var result3 = --a - --b + ++b;
// var result4 = --a - --b + ++b + b--;;

// document.write(result1+"</br>"+"</br>");
// document.write(result2+"</br>"+"</br>");
// document.write(result3+"</br>"+"</br>");
// document.write(result4+"</br>"+"</br>");

//==== Chapter # 6-9 and Task # 3

// var name = prompt("Enter Your name");
// document.write("Wellcome Mr. "+name);

//==== Chapter # 6-9 and Task # 4
// var sub1 = 86;
// var sub2 = 65;
// var sub3 = 75;
// var total_marks = 100;
// document.write("<tr><th> Subject </th><th> Total Marks </th><th> Obtained Marks </th><th> Percentage </th></tr>");

//==== Chapter # 9-11 and Task # 1

// var city = prompt("Enter City name");

// if(city = "karachi"){
//     document.write("“Welcome to city of lights”");
// }


//==== Chapter # 9-11 and Task # 2

// var gender = prompt("Enter Your gender");

// if (gender = "male"){
//     alert("Good Morning Sir");
// }
// else if (gender = "female"){
//     alert("Good Morning Ma'am");
// }


//==== Chapter # 9-11 and Task # 3

// var color = prompt("Enter signal color","red yellow green");
// if (color === "red"){
//     alert("Must Stop");
// }
// else if (color === "yellow"){
//     alert("Ready to Move");
// }
// else if (color === "green"){
//     alert("Move now");
// }
// else {
//     alert("Stop");
// }


//==== Chapter # 9-11 and Task # 4

// var fuel = prompt("Enter Fule");
// if (fuel <= 0.25){
//     alert("“Please refill the fuel in your car”");
// }

//==== Chapter # 9-11 and Task # 5

// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
// }

// var b = 82;
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }


//==== Chapter # 9-11 and Task # 6
// document.write("<h1>Marks Sheet</h1>")
// var total_marks = 300;
// var optain_marks = +prompt("Enter optain marks");

// var Percentage = (optain_marks / 300)*100;
// if (Percentage > 80){
//     document.write("Total Marks: "+total_marks+"</br>");
//     document.write("Marks obtained: "+optain_marks+"</br>");
//     document.write("Percentage: "+Percentage+"</br>");
//     document.write("Grade: A-one"+"</br>");
//     document.write("Remarks: Excellent"+"</br>");
// }

// else if(Percentage > 70){
//     document.write("Total Marks: "+total_marks+"</br>");
//     document.write("Marks obtained: "+optain_marks+"</br>");
//     document.write("Percentage: "+Percentage+"</br>");
//     document.write("Grade: A"+"</br>");
//     document.write("Remarks: Good"+"</br>");
// }


//==== Chapter # 9-11 and Task # 7

//==== Chapter # 9-11 and Task # 8
//==== Chapter # 9-11 and Task # 9
