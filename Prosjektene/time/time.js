function updateClock() {
    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    
    document.getElementById("date").innerHTML = dateString;
    document.getElementById("time").innerHTML = timeString;
  }
  
  setInterval(updateClock, 1000);