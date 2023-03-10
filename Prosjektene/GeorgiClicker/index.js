// Definerer tre variabler som brukes i programmet
let counter = 0;
let clicksPerSecond = 0;
let upgradeCost = 100;

// funksjon som øker telleren når brukeren klikker på knappen
function incrementCounter() {
  counter++; // Øker antall klikks
  document.getElementById("counter").innerHTML = counter; // Oppdaterer telleren i HTML
}

// funksjon som kjøper "bestemoren" som gir det +1 klikk per sekund
function buyUpgrade() {
  if (counter >= upgradeCost) { // Sjekker om brukeren har nok klikk til å kjøpe "bestemoren"
    counter -= upgradeCost; // Fjerner klikks fra brukerens klikkteller
    clicksPerSecond++; // Legger til en ekstra klikk per sekund
    document.getElementById("counter").innerHTML = counter; // Oppdaterer telleren i HTML
    document.getElementById("upgrade-button").innerHTML = "Grandma bought (+1 click/s)"; // Endrer teksten på oppgraderingsknappen
    document.getElementById("upgrade-image").style.display = "block"; // Viser et bilde som indikerer at oppgraderingen er aktiv
    setInterval(autoIncrement, 1000); // Setter i gang en funksjon som øker telleren med klikk per sekund
  } else {
    alert("You need " + (upgradeCost - counter) + " more clicks to buy the upgrade"); // Gir en feilmelding hvis jeg ikke har nok klikk til å kjøpe "bestemoren"
  }
}

// En funksjon som øker telleren automatisk med klikk per sekund
function autoIncrement() {
  counter += clicksPerSecond; // Legger til klikk per sekund på telleren
  document.getElementById("counter").innerHTML = counter; // Oppdaterer telleren i HTML
}

// En funksjon som sjekker om brukeren har nok klikk til å kjøpe "bestemoren", og aktiverer/deaktiverer knappen for å kjøpe oppgraderingen
setInterval(function() {
  if (counter >= upgradeCost) {
    document.getElementById("upgrade-button").disabled = false; // Aktiverer knappen hvis brukeren har nok klikk
    } else {
      document.getElementById("upgrade-button").disabled = true; // Deaktiverer knappen hvis brukeren har ikke nok klikk
    }
  }, 500); 
