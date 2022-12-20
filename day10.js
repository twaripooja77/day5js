//Javascript Errors  ==>> try  throw  catch

let x=0;
try{
if(x===0){
    console.log("i am test");
}else{
    throw "error in test";
}
console.log("hello i am try");
}

catch(error)
{
 console.log(error,"test");
}


//-----------------------------------//


// Javascript promises
let y=0;
let promise = new Promise((resolve, reject)=>{
    if(y===2){
        resolve("you are right");
    }else{
        reject("you arenot right");
    }
  
});
console.log(promise);

//consuming code from promise
promise.then(
    (value)=>{
console.log(value)
    },
    (error)=>{
console.log(error)
    }
);

//-----------------------------//

//DOM

let header= document.getElementById("header");
// header.innerText="<p>Hello I am Pooja</p>";
header.innerHTML="<p>Hello I am Pooja</p>";
console.log(header);

let header1=document.querySelector("#header");
console.log(header1);

let header2=document.querySelectorAll("h1");
header2[0].style.color="red";
header2[0].fontSize="100px";

//-----------------------------------------//


//Create element

let button=document.createElement("button");
button.innerText="Click ME";
document.body.appendChild(button);
console.log(button,"button");

let heading1= document.createElement("h1");
heading1.innerText="I am Heading";
document.body.appendChild(heading1);
console.log(heading1,"This is heading");



let list=document.getElementById("myfood");
console.log(list.firstElementChild,"my first food");
console.log(list.lastElementChild,"my last food");
console.log(list.tagName,"tagname");
console.log(list.parentNode,"parent");
console.log(list.childNodes,"parent");



//creating unordered list using js
let mylists=["kathmandu","Pokhara","Damauli"];
let ul=document.createElement("ul");
for (let user of mylists){
    let li=document.createElement("li");
    li.innerText=user;
    ul.appendChild(li);
}
document.body.appendChild(ul);
console.log(ul);













