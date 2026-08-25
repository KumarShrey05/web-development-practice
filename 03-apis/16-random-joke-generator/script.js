const joke = document.getElementById("jokeArea");
const generateJoke = document.getElementById("btn");

generateJoke.addEventListener("click", () => {
  joke.textContent = "Loading...";
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      joke.textContent = `${data.setup} ${data.punchline}`;
    })
    .catch((error) => {
      joke.textContent = "Something went wrong!";
      console.log(error);
    });
});
