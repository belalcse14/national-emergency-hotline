let historyDataDisplay = [];
// ==========================  Heart Count Added ==================================
const heartCountDisplay = document.getElementById("heart");
let heartCount = 0;
document.getElementById("heart-icon").addEventListener("click", function () {
  heartCount++;
  heartCountDisplay.innerText = heartCount;
});

// ============================= Coin Count Added & Call Button Functionality ==================================
const coinCountDisplay = document.getElementById("coin");
const serviceName = document.getElementById("service-name").innerText;
const serviceNumber = document.getElementById("hotline-number").innerText;
const historyContainer = document.getElementById("history-container");

let coinCount = 100;

document.getElementById("call-button").addEventListener("click", function () {
  coinCount = coinCount - 20;
  if (coinCount < 0) {
    alert("❌ Your Coin is Insufficient!");
    return;
  }
  alert(`📞 Calling.... \n ${serviceName} : ${serviceNumber}`);

  coinCountDisplay.innerText = coinCount;

  const historyData = {
    name: serviceName,
    number: serviceNumber,
    date: new Date().toLocaleTimeString(),
  };
  historyDataDisplay.push(historyData);

  historyContainer.innerText = "";

  for (const data of historyDataDisplay) {
    const div = document.createElement("div");
    div.innerHTML = `
              <div
            class="bg-[#FAFAFA] mx-4 rounded-lg p-4 flex justify-between items-center mb-4"
          >
            <div>
              <p>${data.name}</p>
              <p>${data.number}</p>
            </div>
            <p>${data.date}</p>
          </div>
    `;
    historyContainer.appendChild(div);
  }
});

// ============================== Copy to Clipboard Added for Card #1 ==============================
const copyDisplay = document.getElementById("copy");
let copyCount = 0;
const hotlineNumber = document.getElementById("hotline-number");
document.getElementById("copy-button").addEventListener("click", function () {
  alert("Copied!");
  copyCount++;
  copyDisplay.innerText = copyCount;
  navigator.clipboard.writeText(hotlineNumber.innerText);
});

// ================================= History Section Added =====================================
document.getElementById("clear-button").addEventListener("click", function () {
  historyDataDisplay = [];
  historyContainer.innerText = "";
});
