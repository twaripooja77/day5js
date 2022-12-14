// single line comment
// //declaring variables
// var a=1; //global scope
// let b=2;  //can reassign but cannot be redeclared
// //value cannot be changed and cannot be redeclared
// const c=5;
// alert(a+b);

// let a=10;
// let name="pooja";
// let test; //undefined
// //  prompt(test);
// console.log("hello I am test");

// let b=5;
// alert(a+b);

// let c=a+b;
// console.log(c);
// let d=c*a;
// console.log(d);
// alert(a==b);

//double equals is used to check the value only
//triple equals is used to check the value and datatypes

// let isloggedIn= true;
// let t= isloggedIn && true;
// // alert(t);
// let superuser=false;

// let x=isloggedIn || superuser;
// alert(x);

// if else
// 


// //ARRAY
// let array=[1,2,3,4,5,6,7];
// alert(array[2]);
//console.log(array,"array");


//objects
// let object1={
//     name:"pooja",
//     age:23,
// }
// console.log(object1.name);
// console.log(object1,"object1");
// console.log(object1["age"],"object1");

// let object2={
//     name1:"banana",
//     name2:"mango",
//     name3:"strawberry",
// }
// console.log(object2);



//Array  inside array example
// let intro=[
//     ["my"],
//     ["naam"],
//     ["is"],
//     ["pooja", "tiwari"]
// ];

// console.log(intro);
// console.log(intro[0]);
// console.log(intro[1]);
// console.log(intro[2]);
// console.log(intro[3]);

// //Object inside object example

// const myfav = {
//     color: "red",
//     food: "pizza",
//     number: 7,
//     movie: { ForrestGump: 8.8, HacksawRidge: 8.1 },
//   };

//   console.log(myfav);

// let object3={
//     person1:"pooja",
//     person2:"shivani",
// };
// if(object3.person1==="pooja")  //if(object3.person1===object3.person2)
//  {
//     alert("My name is pooja");
// }
// else{
//     alert("My name is Shivani");
// };

let array1=[56,66,67,32,54,90,69,58,54,65];
array1.push(77);
console.log(array1);


let info={
    myname:"pooja",
    age:"23",
};
if(info.myname ==="pooja" && info.age > 20){
    alert(info.age);
};