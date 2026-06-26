const height=document.getElementById('height');
const weight=document.getElementById('weight');
const output=document.getElementById('output');
const button=document.getElementById('submit');

button.addEventListener("click",calculate)

function calculate(){
    const h=Number(height.value);
    const w=Number(weight.value);
    const bmi = w/(h**2);
    output.innerText= bmi.toFixed(2);
}