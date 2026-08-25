const celsBtn = document.getElementById("celsBtn");
const fahrBtn = document.getElementById("fahrBtn");
const resultBtn = document.getElementById("submit");
const userInput = document.getElementById("temp");
const display = document.getElementById("display");

mode = "";

celsBtn.addEventListener("click", () => {
  mode = "F_TO_C";
});

fahrBtn.addEventListener("click", () => {
  mode = "C_TO_F";
});

resultBtn.addEventListener("click", () => {
  const value = Number(userInput.value);

  if (userInput.value === "") {
    display.innerText = "Please enter temperature";
    return;
  }

  if (mode === "C_TO_F") {
    const result = ((value * 9) / 5 + 32).toFixed(2);
    display.innerText = `${result} °F`;
  } else if (mode === "F_TO_C") {
    const result = (((value - 32) * 5) / 9).toFixed(2);
    display.innerText = `${result} °C`;
  } else {
    display.innerText = "Please select conversion type";
  }
});
