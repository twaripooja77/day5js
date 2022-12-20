// const numbers=[4,5,6,7,8];
// let testedArray= numbers.reduce(getSum,0);
// function getSum(total, num){
//     //total=0;
//     console.log(total);
//     return total+Math.round(num);
// };
// console.log(testedArray);



// const foods=[
//     {name:"Pizza",
//      cost:"120",
// },
// {
//     name:"Pasta",
//     cost:"500",
// },
// {
//     name:"Burger",
//     cost:"80",
// },
// ]
//  let totalbill= foods.reduce(getSum1, 0);
//  function getSum1(total, bill){
//     return total+Math.round(bill.cost);
//  };
//  console.log(totalbill);

// //global scope 
// //What is hoisting
// //undefined and not defined are different

// var test;

// // { } bhaneko block ho 

// function hello(){
//     //local variable
//     //let use  garda block scope 
//     let helloworld;
//     //var use  garda function scope 
//     var helloworld1;
// }

// if(true){
//     var helloworld; //block scope ho tei bhayera baira bata access garna milxa
//     let helloworld1; //let and const -> block scope ho tei bhayera baira bata access garna mildaina

// }


// const number2= [4,5,6,7,8];

// const revisednum=number2.forEach(find);
// function find(num)
// {
    
// }
// console.log(number2);

// //find le array or object return garne hoina tara element j xa tei return garxa

// //function without name is known as anonymous function

// let foods11=[
//     {name:"Pizza", cost:120},
//     {name:"Pizza", cost:120},
//     {name:"Pasta", cost:120},
// ];
// let updatedfoods= foods11.find(function(myfood){  //anonymous function
//     return myfood.name==="Pizza";
// })
// console.log(updatedfoods);

// let updatedfoods11= foods11.find((myfood)=>{      //anonymous and arrow function
//     return myfood.name==="Pizza";
// })
// console.log(updatedfoods11);


// const arrayFunction=()=>{  //anonymous function 
//     return 2;
// }

 
//  //while loop
// const testarray=[1,2,3,4,5]
// var newarray=[];
// let i=0;

// // while(i<5){
// //     console.log(i);
// //     newarray.push(testarray[i]);
// //     i++;
// // }
// // console.log(newarray);

// do{
//     newarray.push(testarray[i]);
//     console.log(testarray[i])
//     i++;
  
// }while(i<5);  
//     console.log(newarray);


//     //call back functions


//     //immediately invoked function expressions
//     (function (){
//         console.log("hi");
//     })();
//     // last ko small bracket le immediately invoke gareko ho 





    //day 8 assignment
    
// 1. Write a JavaScript method that takes an array of numbers and returns the array of the second and third  smallest number without using the sort method.
// Example:
//  Input: [12,33,5,27,1] 
//  output =[5,12]

const numbers = [12,33,5,27,1]
const updatednumbers = []
for(let i=0; i<numbers.length; i++){
    for(let j=i+1; j<numbers.length; j++){
        if(numbers[i] > numbers[j]){
            let num = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = num;
            console.log(num);
        }
    }
}
for(let i=1; i<=2; i++){
    updatednumbers.push(numbers[i])
}
console.log(updatednumbers);



// 2. Write a JavaScript method that takes an array of numbers and returns false if every number is not prime. Otherwise return true
// Example:
// [1,7,11,13] =>true
// [2,3,45]=>false

const num1=[1,7,11,13];
 const isprime1= num1.filter(findprime);

function findprime(primenum){
    for(let i=0; i <= primenum.length;i++){

        if(primenum%i===0){
            return false;
        }else{
            return true;
        }
    }
}
console.log(isprime1);

// 3)Given an array of nums and an integer target, return index of the two numbers such that they add up to target.
//  You may assume that each input would have exactly one solution, and you may not use the same element twice
//  Input: nums = [2,7,11,15], target = 9
//  Output: [0,1]
//  Input: nums = [3,2,4], target = 6
//  Output: [1,2]

const num2 =[2,7,11,15];
const target=22;
  function add(){
    for(let i=0; i<num2.length;i++){
        for(let j=i+1; j<num2.length;j++){
    
    if(num2[i]+num2[j]===target){
        return [i,j];
        
    }
 }
}
 }
 console.log(add())  ;


 // 4))Write a JavaScript method that takes array of objects
//   const data = [
//     { food: {name:"pizza", id: 2 }, qty: 1 },
//     { food: {name:"momo",id: 3 }, qty: 5 },
//     { food: { name:"pizza",id: 2 }, qty: 9 }
//   ];
// //should be unique according to id and should sum the qty with same id
// output=[food:{name:"pizza",qty:10}]

const data = [
         { food: {name:"pizza", id: 2 }, qty: 11 },
         { food: {name:"momo",id: 3 }, qty: 5 },
         { food: { name:"pizza",id: 2 }, qty: 9 }
       ];

       const finaldata=[];
 
       const totalorder= data.filter(myorder1);

       function myorder1(name1){
        return name1.food.id===2;
       }

       const totalorder2=totalorder.reduce(myorder2,0);
       function myorder2(name2, name1){
        return name2+name1.qty;
       }
       console.log(totalorder2);

    //    const totalorder3=totalorder.map(myorder3);
    //    function myorder3(currentvalue){
    //     console.log(currentvalue,'currentvalue');
    //    return currentvalue.qty;
       
    //    }
    //    console.log(totalorder3);

     

       



//        5.Write a method to Factorialize a Number
// Example:
// Input:factorialize(5)
// Output:120

    let number=5;
   let fact=1;
    for(number;number>=1; number--){
        fact=fact*number;
        console.log(fact);
    }
