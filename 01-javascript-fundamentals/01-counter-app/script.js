const counter = document.getElementById('counter')
const increase = document.getElementById('increment')
const decrease = document.getElementById('decrement')
const reset = document.getElementById('reset')

let count = 0;

function updateCounter(){
    counter.textContent = count;
}

increase.addEventListener('click',()=>{
    count++;
    updateCounter();
})
decrease.addEventListener('click',()=>{
    count--;
    updateCounter();
})
reset.addEventListener('click',()=>{
    count=0;
    updateCounter();
})