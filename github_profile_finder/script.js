const username = document.getElementById("username");
const search = document.getElementById("search");
const userDetails = document.getElementById("userDetails");

async function finder(val) {
  userDetails.innerHTML = "Loading...";
  try {
    const response = await fetch(`https://api.github.com/users/${val}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    const data = await response.json();
    // console.log(data);
    userDetails.innerHTML = `
        <p>Name: ${data.name || "Not Available"}</p>
        <p>URL: ${data.html_url}</p>
        <p>No of Public Repos: ${data.public_repos}</p>`;
  } catch (error) {
    userDetails.innerHTML = "Something Went Wrong!";
    console.log(error);
  }
}

search.addEventListener("click", () => {
  finder(username.value.trim());
});
