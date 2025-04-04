let btn=document.querySelector('button');
let birthday=document.querySelector('input');
let res=document.querySelector('h2');

btn.addEventListener("click",calculateAge);

function calculateAge(){
    let birthdayValue=birthday.value;
    if(birthdayValue==""){
        alert("Please enter your birthday");
    }
    else{
        let age=getAge(birthdayValue);
        res.innerText=`You are ${age} years old`;
    }
}
function getAge(birthdayValue){
    let currentDate=new Date();
    let birthDate=new Date(birthdayValue);

    let year=currentDate.getFullYear()-birthDate.getFullYear();
    let month=currentDate.getMonth()-birthDate.getMonth();

    if(month<0 || month===0 && currentDate.getDate()<birthDate.getDate()){
        year--;
    }
    return year;
}