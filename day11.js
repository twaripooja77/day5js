//EVENT  in JS

let button= document.getElementById("btn1");
console.log(button,"button");
//for show at p tag
let pTag=document.querySelector("p");
button.addEventListener("click",()=>{
pTag.innerText="I am Clicked";
})
//in console
button .addEventListener("click",()=>{
    console.log("I am clicked");
});


function testClick(){
    console.log("Someone clicked me");

}

let inputField=document.querySelector("input");
document.addEventListener("keypress",(event)=>{
    console.log(event,"event")
    if(event.key ==="p"){
        console.log("key pressed");
    }
}

)





