var cookies = 0;
var fingers = 0;
var grandmas = 0;

var cookiesPerSecond = 0;

const myInterval = setInterval(checkUpgrades, 1000);

function addCookie() {
	cookies += 1;
  this.updateCookieDisplay();
}

function checkUpgrades() {
    cookies += cookiesPerSecond;
  this.updateCookieDisplay();
}

function updateCookieDisplay() {
    document.getElementById("cookieCount").innerHTML = cookies;
  document.getElementById("cps").innerHTML = cookiesPerSecond;
  document.getElementById("fingerButton").disabled = !(cookies >= 10);
  document.getElementById("grandmaButton").disabled = !(cookies >= 100);
}

function buyGrandma() {
	grandmas++;
  document.getElementById("grandmaCount").innerHTML = grandmas;
  cookies -= 100;
  this.updateCPS()
}

function buyFinger() {
	fingers++;
  cookies -= 10;
  document.getElementById("fingerCount").innerHTML = fingers;
  this.updateCPS();
}

function updateCPS() {
	cookiesPerSecond = (fingers * 1) + (grandmas * 5);
  this.updateCookieDisplay();
}