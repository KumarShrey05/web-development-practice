const text= document.getElementById('text');
const totalChar= document.getElementById('total-counter');
const remChar=document.getElementById('rem-counter');

text.addEventListener("keyup",()=>{
    counter();
})

function counter(){
    totalChar.innerText=text.value.length;
    remChar.innerText=text.getAttribute("maxlength")-totalChar.innerText;
}