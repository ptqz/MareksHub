const cells = document.querySelectorAll("td");
let player = "X";

for (const cell of cells) {
  cell.addEventListener("click", (event) => {
    if (event.target.textContent === "") {
      event.target.textContent = player;
      checkWinner();
      player = player === "X" ? "O" : "X";
    }
  });
}

function checkWinner() {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of combinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === player &&
      cells[b].textContent === player &&
      cells[c].textContent === player
    ) {
      alert(player + " wins!");
      resetGame();
      break;
    }
  }

  let draw = true;
  for (const cell of cells) {
    if (cell.textContent === "") {
        }
    }
}

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
document.body.appendChild(resetButton);

resetButton.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  for (const cell of cells) {
    cell.textContent = "";
  }
  player = "X";
}