// Funksjon for å vise prompt-boksen og lagre brukernavnet i Local Storage
/*function showPrompt() {
    const username = prompt('Skriv inn ditt brukernavn:');
    if (username !== null && username !== '') {
        localStorage.setItem('username', username);
        alert('Brukernavnet er lagret.');
    }
}

// Hente brukernavnet fra Local Storage når siden lastes inn
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername !== null) {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.innerText = 'Velkommen tilbake, ' + savedUsername + '!';
    }
}*/
window.onload = function(){
    console.log("hei")
    
if(username === "null") {
    username = prompt("What is your username?");
    localStorage.setItem("userName", username)
}
if(!username){
    username = prompt("What is your username?");
    localStorage.setItem("username", username)
}
}