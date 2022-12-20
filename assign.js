// 1)Write a simple JavaScript program to join all elements of the following array into a string.

//  const array=["Apple","Banana","Orange","Mango"]
//  output=>Apple,Banana,Orange,Mango
//         Apple+Banana+Orange+Mango

const array=["Apple", "Banana", "Orange", "Mango"];
fruits=array.join();
console.log(fruits);



// 2)Write a simple JavaScript program to reverse an array without using array.reverse() method 
//  const data=[1,2,3,4,5,6]
//  output=[6,5,4,3,2,1]

const data= [1,2,3,4,5,6];
numbers= data.reverse();
console.log(numbers);

// 3)Write a method that returns a unique array
//  const data = [1, 2, 1, 2, 3];
//  output= [1, 2, 3]

const data1=[1,2,1,2,3];
number1= new Set(data1);
console.log(number1);

// 4)Write a method that returns array of age
// const data=[{name:"Jack",age:"22"},{name:"David",age:"18"},{name:"Rohit",age:"4"}]
// output=>[24,18,4]

const data2=[
    {name:"Jack",
    age:"22"},
    {name:"David",
    age:"18"},
    {name:"Rohit",
    age:"4"}
];
const updatedata2=data2.map(fulldata);          
function fulldata(info){
    console.log(info.name);
  return   info.age  ;
 
}
console.log(updatedata2);


// 5)Write a method to find minumum and maximum values 
//  const data=[10,100,3,200,5,6]
//  output: max=>200
//         min=>3

// const data3=[10,100,3,200,5,6];
// max=Math.max(10,100,3,200,5,6);
// min=Math.min(10,100,3,200,5,6)
// console.log(`max=> ${max}`);
// console.log(`min=> ${min}`);

const values = [10, 100, 3, 200, 5, 6];
let maxValue = values[0];
let minValue = values[0];
values.forEach(function (number) {
    if (number > maxValue) {
        maxValue = number;
    }
    if (number < minValue) {
        minValue = number;
    }
});

console.log("Max =>", maxValue);
console.log("Min =>", minValue);




// 6)Write a method to sort array without using sort method 
// const data= [4, 50, 1, 5, 8];
// output =[1,4,5,8,50]

const data5 = [4, 50, 1, 5, 8];

for (let i = 0; i < data5.length; i++) {
  for (let j = i + 1; j < data5.length; j++) {
    if (data5[i] > data5[j]) {
      num = data5[i];
      data5[i] = data5[j];
      data5[j] = num;
    }
  }
}
console.log("Sorted array=>", data5);


//7)
const peoples = [
    {
        name: 'Luke Skywalker',
        height: '172',
        weight: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        weight: '136',
        eye_color: 'black',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        weight: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        weight: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
// a)write a method to get array of peoples with weight greater than 100

const updatepeoples=peoples.filter(weight);            //MAP in array of objects
function weight(info){   
  return info.weight > 100;
 
}
console.log(updatepeoples);



// b)write a method to get array of peoples with height less than 200
const updatepeoples1=peoples.filter(height);            //MAP in array of objects
function height(info){   
  return info.height < 200;
 
}
console.log(updatepeoples1);


// c)write a method to get all male characters
const updatepeoples2=peoples.filter(gender);            //MAP in array of objects
function gender(info){   
  return info.gender === "male";
 
}
console.log(updatepeoples2);
// d)write a method to get all female characters

const updatepeoples3=peoples.filter(gender);            //MAP in array of objects
function gender(info){   
  return info.gender === "female";
 
}
console.log(updatepeoples3);
// e))write a method to get array of objects with just name and height properties 

const updatepeople4=peoples.map(nameheight);            //MAP in array of objects
function nameheight(name){
   
  return `${name.name} ${name.height}` ;
 
}
console.log(updatepeople4);
