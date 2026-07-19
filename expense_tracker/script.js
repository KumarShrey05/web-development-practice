const totalIncome = document.getElementById("total-income");
const totalExpense = document.getElementById("total-expense");
const totalBalance = document.getElementById("total-balance");
const expenseBtn = document.getElementById("expense-btn");
const incomeBtn = document.getElementById("income-btn");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const addEntryButton = document.getElementById("add-entry");
const allEntrySlider = document.getElementById("all-entries");
const incomeSlider = document.getElementById("income-slider");
const expenseSlider = document.getElementById("expense-slider");
const logs = document.querySelector(".logs");

let balance = 0;
let income = 0;
let spend = 0;
let mode = "";
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
transactions.forEach((item) => {
  if (item.type == "income") {
    income += item.amount;
    balance += item.amount;
  }

  if (item.type == "expense") {
    spend += item.amount;
    balance -= item.amount;
  }
});

expenseBtn.addEventListener("click", () => {
  mode = "expense";
});
incomeBtn.addEventListener("click", () => {
  mode = "income";
});
allEntrySlider.addEventListener("click", () => {
  mode = "all";
  slider();
});
incomeSlider.addEventListener("click", () => {
  mode = "income-slider";
  slider();
});
expenseSlider.addEventListener("click", () => {
  mode = "expense-slider";
  slider();
});

function cards() {
  const value = Number(amount.value);
  if (mode == "income") {
    income += value;
    balance += value;
  }
  if (mode == "expense") {
    spend += value;
    balance -= value;
  }

  totalIncome.textContent = `Rs ${income}`;
  totalExpense.textContent = `Rs ${spend}`;
  totalBalance.textContent = `Rs ${balance}`;
}

function logData(mode, description, amount, date) {
  transactions.push({
    type: mode,
    name: description,
    amount: Number(amount),
    date: date,
  });
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

addEntryButton.addEventListener("click", () => {
  if (mode == "") {
    alert("Please select Income or Expense");
    return;
  }

  if (description.value.trim() == "") {
    alert("Please enter description");
    return;
  }

  if (amount.value == "" || Number(amount.value) <= 0) {
    alert("Please enter valid amount");
    return;
  }

  if (date.value == "") {
    alert("Please select date");
    return;
  }

  cards();
  logData(mode, description.value, amount.value, date.value);

  showLog(transactions);
  description.value = "";
  amount.value = "";
  date.value = "";
});

function showLog(data) {
  logs.innerHTML = "";

  if (data.length == 0) {
    logs.innerHTML = `
          <div class="log-box">
            No transactions found
          </div>
        `;
    return;
  }
  data.forEach((item) => {
    logs.innerHTML += `<div class="log-box"> 
        ${item.name} ${item.amount} ${item.date}
        </div>`;
  });
}
function slider() {
  if (mode == "all") {
    showLog(transactions);
  }
  if (mode == "income-slider") {
    let incomeData = transactions.filter((item) => item.type == "income");
    showLog(incomeData);
  }
  if (mode == "expense-slider") {
    let expenseData = transactions.filter((item) => item.type == "expense");
    showLog(expenseData);
  }
}
totalIncome.textContent = `Rs ${income}`;
totalExpense.textContent = `Rs ${spend}`;
totalBalance.textContent = `Rs ${balance}`;

showLog(transactions);