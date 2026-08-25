const quote = document.getElementById("quoteArea");
const newQuoteBtn = document.getElementById("btn");

newQuoteBtn.addEventListener("click", async () => {
  quote.textContent = "Loading...";
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    quote.textContent = `${data.quote} ~ ${data.author}`;
  } catch (error) {
    quote.textContent = "Something Went Wrong!";
    console.log(error);
  }
});
