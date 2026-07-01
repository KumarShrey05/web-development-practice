const celsBtn=document.getElementById('celsBtn');
const fahrBtn=document.getElementById('fahrBtn');
const resultBtn=document.getElementById('submit');
const userInput=document.getElementById('temp');

// celsBtn.addEventListener("click",()=>{
//     updateCelsBtn();
// });

// celsBtn.addEventListener("onclick",()=>{
//     updateFahrBtn();
// })


// function updateCelsBtn(){
// }
resultBtn.addEventListener("click",()=>{
   document.getElementById('display').innerText= (Number(userInput.value)*9/5)+32;
})