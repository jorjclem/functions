let global= 0

dragon("dragons damage:")

function dragon(mess,global){
    let ele=document.createElement("div");
    let nameEle=document.createElement("h1");

    nameEle.innerHTML=mess+global;
    ele.appendChild(nameEle)
    document.body.appendChild(ele)
}

let fire = document.createElement("button");
fire.innerHTML="Fire" + global;

fire.addEventListener("click",function (){
    global=global+3;
    fire.innerHTML="Fire" +global;
})

let ice = document.createElement("button");
ice.innerHTML="Ice" + global;

ice.addEventListener("click", function (){
    global=global+1;
    ice.innerHTML="ice" +global;
})

let poison = document.createElement("button");
poison.innerHTML="poison" +global;

poison.addEventListener("click", function(){
    global=global+4;
    poison.innerHTML="poison"+global;
})


document.body.appendChild(fire)
document.body.appendChild(ice)
document.body.appendChild(poison)
