// Run fucntion da jeg opner siden

window.onload = function() {
  // Variabler
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const num3 = document.getElementById("num3");
  const num4 = document.getElementById("num4");
  const num5 = document.getElementById("num5");
  const num6 = document.getElementById("num6");
  const num7 = document.getElementById("num7");
  const num8 = document.getElementById("num8");
  const calculate = document.getElementById("calculate");
  const result = document.getElementById("result");

  // Fucntion som regner ut gjennomsnitten av tallene
  document.getElementById("calculate").onclick = function() {
    const average =
      (Number(num1.value) +
        Number(num2.value) +
        Number(num3.value) +
        Number(num4.value) +
        Number(num5.value) +
        Number(num6.value) +
        Number(num7.value) +
        Number(num8.value)) / 8;
    result.textContent = "Gjennomsnitts karakteren din er: " + average;
  };
};
