  // Oppretter en teller som starter på 0
  var count = 0;

  // Setter opp en funksjon som skal kjøre med jevne mellomrom
  // med en halvsekunds forsinkelse mellom hver gang
  var interval = setInterval(function() {
    // Oppdaterer tekstinnholdet i div-elementet med telleren
    document.getElementById('count').textContent = count++;

    // Sjekker om telleren har nådd 100, og stopper funksjonen hvis det er tilfelle
    if (count > 100) clearInterval(interval);
  }, 500);