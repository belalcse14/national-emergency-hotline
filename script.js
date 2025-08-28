const heartCountDisplay = document.getElementById("heart-count");
console.log("Belal");
let heartCount = 0;

document.getElementById("heart-icon").addEventListener("click", function () {
  heartCount++;
  heartCountDisplay.innerText = heartCount;
});
