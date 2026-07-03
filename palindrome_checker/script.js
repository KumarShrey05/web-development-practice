const submitBtn = document.getElementById("submitBtn");
const valInput = document.getElementById("valInput");
const display = document.getElementsByClassName("display")[0];

submitBtn.addEventListener("click", () => {
  calculate();
});

valInput.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        calculate();
    }
});

function calculate() {
  const st = valInput.value.trim().toLowerCase();
  const result = st.split("").reverse().join("");
  if (st === "") {
    display.innerText = "No Value Entered";
  }
  else if (result === st) {
    display.innerText = "It is a Palindrome";
  } else {
    display.innerText = "It is not a Palindrome";
  }
}
