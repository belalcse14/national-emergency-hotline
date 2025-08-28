// ==========================  Heart Count Added ==================================
const heartCountDisplay = document.getElementById("heart");
let heartCount = 0;
document.getElementById("heart-icon").addEventListener("click", function () {
  heartCount++;
  heartCountDisplay.innerText = heartCount;
});

// ============================= Coin Count Added ==================================
const coinCountDisplay = document.getElementById("coin");
let coinCount = 100;

document.getElementById("call-button").addEventListener("click", function () {
  coinCount = coinCount - 20;
  if (coinCount < 0) {
    alert("Your Coin is Insufficient!");
    return;
  }
  alert("Do You Want to Call?");

  coinCountDisplay.innerText = coinCount;
});

// ============================== Copy to Clipboard Added ==============================
const copyDisplay = document.getElementById("copy");
let copyCount = 0;

document.getElementById("copy-button").addEventListener("click", function () {
  alert("Copied!");
  copyCount++;
  copyDisplay.innerText = copyCount;
});
