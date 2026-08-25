const change=document.querySelector('.btn')

let randomBtn =()=>{
    return Math.floor(Math.random()*256);
}
let changeColor=()=>{
    document.body.style.backgroundColor=`rgb(${randomBtn()},${randomBtn()},${randomBtn()})`;
}

change.addEventListener('click',changeColor);