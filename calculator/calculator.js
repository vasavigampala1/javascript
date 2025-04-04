let bill=document.querySelector("#billamount");
let tip=document.querySelector("#tip");
let h2=document.querySelector("h2");
let button=document.querySelector("button");

function calculateTotal(){
    let billValue=bill.value;
    let tipValue=tip.value;
    let sum= billValue * (1 + tipValue / 100);

    h2.innerText=sum.toFixed(2);
    // h2.innerText="";
}
button.addEventListener("click",calculateTotal);