  //starter funsjon da nettsiden laster opp
window.onload = function() {

  // Henter elementene med ID-ene "num1", "num2", "num3", osv.
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const num3 = document.getElementById("num3");
  const num4 = document.getElementById("num4");
  const num5 = document.getElementById("num5");
  const num6 = document.getElementById("num6");
  const num7 = document.getElementById("num7");
  const num8 = document.getElementById("num8");
 
  // Henter knappen med ID-en "calculate" og resultat-elementet med ID-en "result"
  const calculate = document.getElementById("calculate");
  const result = document.getElementById("result");

  // Legger til en klikk-lytter på knappen "calculate"
  document.getElementById("calculate").onclick = function() {

    // Regner ut gjennomsnittet av tallene som brukeren har skrevet inn
    const average =
      (Number(num1.value) +
        Number(num2.value) +
        Number(num3.value) +
        Number(num4.value) +
        Number(num5.value) +
        Number(num6.value) +
        Number(num7.value) +
        Number(num8.value)) / 8;
    
        // Setter resultatet inn i resultat-elementet på siden
        result.textContent = "Gjennomsnitts karakteren din er: " + average;
  };
};
