// console.log("I created recision .js file");
// //this is a comment

// //function
// function add(a,b){
// return a+b;
// }

// // let name="pooja";
// // console.log(name);

// let x=5;
// y=6;
//  x +=y;
//  document.write(x);


//  let a= "pooja";
//  b= "tiwari";
//  a += b;
//  document.write(a);

//  let cup="water"; 
// document.write(typeof(cup));

// let user1={
//     name:"pooja",
//     email:"twaripooja77@gmail.com",
//     phone:9869663662,
//     isStudent: true,  //1 or 0
// }
// if(user1.isStudent){
//     console.log("got permission to give examinations")
// }else{
//     console.log("cannot give examinations");
// }
// console.log(user1.email, typeof(user1.name));
// console.log(user1.isStudent);

// let user={
//     parking: true,
//     car: null,
// };
// console.log(user.car);

// array=[1,2,3,'gita' ,['ram','shyam'],{name:"pooja", age:23}]
// console.log(array[3]);
// if(array[5]){
// console.log("true");
// }else{
// console.log("false");
// }

// console.log(array[4][0]);
// console.log(array[5].age);

// let getintolod = null;
// function gatepass(age){

//     if (age>18){
//         getintolod= "Is allowed in the club";
//     }else{
//         getintolod="Isnot allowed in the club";
//     }
// }

// gatepass(16);
// console.log(getintolod);

// function coffemaker(milk, sugar, coffee){
// return  cup= milk+sugar+coffee;
// }
// console.log(coffemaker("milk","sugar","coffee"))
// console.log(cup);

// let student={
//     name:"pooja",
//     changeName: function(){
//         this.name="hihowru"
//     }
// }

// // setInterval(()=>{
// //     console.log("hi")
// // },1000)

// let user5=[1,2,3,4,5];
// console.log(typeof(user5));    //object dekhauxa



// let frontendCourse={
//     student1:"POOJA",
//     student2:"SHIVANI",
//     student3:"BINIP",
//     changeName:function(mynaam){
// this.student3="PAWAN"      //or frontendCourse.student3
//     }
// }
// console.log(
//     frontendCourse.changeName
// )

// let naaam="pooja";
// console.log(naaam.indexOf("o"));
// console.log(naaam.lastIndexOf("o"));

// let i=0;
// number="";
// while (i < 10) {
//   number += "The number is " + i;
//   i++;
// }
// console.log(number);



// let text = "HELLO MY NAME IS POOJA";
// let text2 = text.slice(6);

// console.log(text2);

// const myfav = ["MANGO", "AVOCADO", "PINEAPPLE"];
// myfav.push("Strawberry");

// console.log(myfav);

// let info={
//     favmovie:"FORESSTGUMP",
//     IMDB:9,
// };
// if(info.favmovie ==="FORESSTGUMP" && info.IMDB > 8){     //Single Threading
//    console.log("This is my favourite movie")
// }else {
//         console.log("PLEASE TRY AGAIN LATER");
//     };


   

//switch case


// let show=prompt("Enter Operator(+, -, *, /):");
// let num1=parseInt(prompt());                //insert gareko number int ma change garna parseInt use gareko
// let num2=Number(prompt());
// let cal;
//  switch(show){
//     case "+":
//     cal= num1 + num2;
//     console.log(`${num1}+${num2}=${cal}`); //console.log(cal);
//     break;

//     case "-":
//     cal= num1-num2;
//     console.log(`${num1}-${num2}=${cal}`);
//     break;

//     case "*":
//     cal= num1*num2;
//     console.log(`${num1}*${num2}=${cal}`);
//     break;

//     case "/":
//     cal= num1/num2;
//     console.log(`${num1}/${num2}=${cal}`);
//     break;
    
//     default:
//         console.log("Invalid")
//  }


//remove
//1. pop();
//2.shift();

//add
//1.push("value");
//2.unshift("value");

//  let favfood=["chickencurry","pizza", "burgers"];
//  favfood.push("panipuri");
//  console.log(favfood);

//  let favfood1=["chickencurry","pizza", "burgers"];                  

//  favfood1.unshift("panipuri");
//  console.log(favfood1);
//  favfood1.pop();
//  console.log(favfood1);
//  favfood1.shift();
//  console.log(favfood1);

//  let dailyroutine=["eat","sleep","code", "bath"];
//  //dailyroutine[0]="code";
//  console.log(dailyroutine);

//  console.log(dailyroutine.sort());
//  console.log(dailyroutine.reverse());
 
// file1=["hi","my","name","is"];
// file2=["pooja", "tiwari"];

// console.log(file1.concat(file2));

// const numbers=[10,20,30,40,50];
// const array= numbers.map(multiply);
// const array1= numbers.map(subtraction);


// function multiply(num){
//     return num*10;
// }
// function subtraction(num){
//     return num-5;
// }
// console.log(array);
// console.log(array1);


let person=[
    {
        firstName:"Pooja",
        lastName:"Tiwari",
        age: 23
    },
    {
        firstName:"Pawan",
        lastName:"Tiwari",
        age: 19
    },
];
const updateperson=person.map(fullname);            //MAP in array of objects
function fullname(name){
    console.log(name.firstName)
  return {fullname:`${name.firstName} ${name.lastName}` };
 
}
console.log(updateperson);









