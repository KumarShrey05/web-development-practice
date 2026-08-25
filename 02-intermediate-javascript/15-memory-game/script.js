// Emojis
const emojis = [
  "😀",
  "😀",
  "😐",
  "😐",
  "😂",
  "😂",
  "😃",
  "😃",
  "🤣",
  "🤣",
  "🤔",
  "🤔",
  "😁",
  "😁",
  "😫",
  "😫",
  "😵",
  "😵",
  "😮",
  "😮",
];

const tileContainer = document.querySelector(".tile-container");
const restartBtn = document.querySelector("#restart-btn");

let firstTile = null;
let secondTile = null;
let lockBoard = false;
let counter = 0;

// Shuffle function
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// Create tiles
function createTiles() {
  tileContainer.innerHTML = "";

  shuffle(emojis);

  emojis.forEach((emoji) => {
    const tile = document.createElement("div");

    tile.classList.add("box");

    // Emoji initially hidden
    tile.textContent = "?";

    // Store actual emoji
    tile.dataset.emoji = emoji;

    tile.addEventListener("click", () => {
      if (lockBoard) return;
      if (tile === firstTile) return;
      counter++;
      document.getElementById("count").innerHTML = `Count: ${counter}`;

      tile.textContent = tile.dataset.emoji;

      if (!firstTile) {
        firstTile = tile;
        return;
      }

      secondTile = tile;

      checkMatch();
    });

    tileContainer.appendChild(tile);
  });
}

// Check two tiles
function checkMatch() {
  lockBoard = true;

  if (firstTile.dataset.emoji === secondTile.dataset.emoji) {
    firstTile = null;
    secondTile = null;

    lockBoard = false;
  } else {
    setTimeout(() => {
      firstTile.textContent = "?";
      secondTile.textContent = "?";

      firstTile = null;
      secondTile = null;

      lockBoard = false;
    }, 800);
  }
}

// Restart game
restartBtn.addEventListener("click", () => {
  firstTile = null;
  secondTile = null;
  lockBoard = false;

  createTiles();
});

// Start game
createTiles();
