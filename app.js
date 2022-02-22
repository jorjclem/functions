let global= 0

dragon("dragons damage:")

function dragon(mess,global){
    let ele=document.createElement("div");
    let nameEle=document.createElement("h1");

    nameEle.innerHTML=mess+global;
    ele.appendChild(nameEle)
    document.body.appendChild(ele)
}

let button = document.createElement("button");
button.innerHTML="Fire" + global;

button.addEventListener("click",function (){
    global=global+3;
    button.innerHTML="Fire" +global;
})

let button = document.createElement("button");
button.innerHTML="Ice" + global;

button.addEventListener("click", function (){
    global=global+1;
    button.innerHTML="ice" +global;
})

let poison = document.createElement("button");
button.innerHTML="poison" +global;

button.addEventListener("click", function()){
    global=global+4;
    button.innerHTML="poison"+global;
})


document.body.appendChild(fire)
document.body.appendChild(ice)