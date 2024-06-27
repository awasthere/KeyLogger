let startbtn=document.getElementById("start");
let stopbtn=document.getElementById("stop");
let orangediv=document.getElementById("orange");
let graydiv=document.getElementById("yellow");
startbtn.addEventListener("click",()=>{
    startbtn.style.backgroundColor="green";
    stopbtn.style.backgroundColor="";
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleUp);
});
stopbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    stopbtn.style.backgroundColor="red";
    startbtn.style.backgroundColor="";
    orangediv.textContent="";
    graydiv.textContent="";
})

function handleUp(e){
    orangediv.innerHTML=`key ${e.key} released`;
    graydiv.innerHTML="key is released";
}
function handleDown(e){
    orangediv.textContent=`Key ${e.key} pressed down`;
    graydiv.textContent="Key is down";   
}
