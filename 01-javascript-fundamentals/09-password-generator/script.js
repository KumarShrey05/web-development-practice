const password = document.getElementById("password");
const weak = document.getElementById("weak");
const medium = document.getElementById("medium");
const strong = document.getElementById("strong");
const copy = document.getElementById("copy");
const output = document.getElementById("output");

output.addEventListener("click", () => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*?";
  let allChar = upper + lower + number + symbol;
  let length = 0;
  if (weak.checked) {
    length = 5;
  }
  else if (medium.checked) {
    length = 10;
  }
  else if (strong.checked) {
    length = 15;
  }
  else{
    password.innerText="Select the Password Strength";
    return;
  }

  let passwrd = "";

  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * allChar.length);
    passwrd += allChar[random];
  }
  password.innerText=passwrd;
});

copy.addEventListener("click", () => {

  const value = password.innerText;

  if (!value || value === "Select the Password Strength" || value ==="--------------------------------------") {
    alert("Please generate a password first!");
    return;
  }

  navigator.clipboard.writeText(value);
  alert("Password copied to clipboard!")
});