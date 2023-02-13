let counter = 0;
let clicksPerSecond = 0;
let upgradeCost = 100;

function incrementCounter() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
}

//grandma

function buyUpgrade() {
  if (counter >= upgradeCost) {
    counter -= upgradeCost;
    clicksPerSecond++;
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("upgrade-button").innerHTML = "Grandma bought (+1 click/s)";
    document.getElementById("upgrade-button").disabled = true;
    document.getElementById("upgrade-image").style.display = "block";
    setInterval(autoIncrement, 1000);
  } else {
    alert("You need " + (upgradeCost - counter) + " more clicks to buy the upgrade");
  }
}

// Increases clicks after upgrade
function autoIncrement() {
  counter += clicksPerSecond;
  document.getElementById("counter").innerHTML = counter;
}

// check if the user has enough clicks to buy the upgrade
setInterval(function() {
  if (counter >= upgradeCost) {
    document.getElementById("upgrade-button").disabled = false;
  } else {
    document.getElementById("upgrade-button").disabled = true;
  }
}, 500);