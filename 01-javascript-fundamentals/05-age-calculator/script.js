function calculate() {
  const dob = document.getElementById("date").value;
  if (dob === "") {
    document.querySelector(".age").innerText = "Please select date";
    return;
  }
  console.log(dob);
  let birthDate = new Date(dob);
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();
  if (month < 0) {
    age--;
  }
  document.querySelector(".age").innerText = "Your age is " + age + " years";
}

function reset() {
  document.getElementById("date").value = "";
  document.querySelector(".age").innerText = "";
}
