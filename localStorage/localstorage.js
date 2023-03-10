// Funksjon for å vise prompt-boksen og lagre brukernavnet i Local Storage
function showPrompt() {
    // Viser en prompt-boks for brukeren å skrive inn sitt brukernavn
    const username = prompt('Skriv inn ditt brukernavn:');
    // Sjekker om brukernavnet som ble skrevet inn ikke er null og ikke er tom streng
    if (username !== null && username !== '') {
        // Hvis brukernavnet er gyldig, lagres det i Local Storage med nøkkelen 'username'
        localStorage.setItem('username', username);
        // Viser en melding til brukeren om at brukernavnet er lagret
        alert('Brukernavnet er lagret.');
    }
}

// Hente brukernavnet fra Local Storage når siden lastes inn
window.onload = function() {
    // Henter brukernavnet som er lagret i Local Storage med nøkkelen 'username'
    const savedUsername = localStorage.getItem('username');
    // Sjekker om et brukernavn ble funnet i Local Storage
    if (savedUsername !== null) {
        // Hvis et brukernavn ble funnet, henter vi HTML-elementet med id 'welcome-message'
        const welcomeMessage = document.getElementById('welcome-message');
        // Setter teksten til HTML-elementet til en velkomstmelding som inkluderer brukernavnet som ble funnet i Local Storage
        welcomeMessage.innerText = 'Velkommen tilbake, ' + savedUsername + '!';
    }
}