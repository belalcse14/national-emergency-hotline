let historyDataDisplay = [];
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
// ============================================================
const heartCountDisplay = document.getElementById("heart");
const coinCountDisplay = document.getElementById("coin");
const historyContainer = document.getElementById("history-container");
const copyDisplay = document.getElementById("copy");

// ==========================  Heart Count Added ==================================
const heartIcons = document.getElementsByClassName("heart-icon");
for (let heart of heartIcons) {
  heart.addEventListener("click", function () {
    heartCount++;
    heartCountDisplay.innerText = heartCount;
  });
}

// ======================== Coin Count Added & Call Button Functionality ===================

const callButtons = document.getElementsByClassName("call-button");
for (let button of callButtons) {
  button.addEventListener("click", function () {
    const card = button.closest(".card-container");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

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
}

// ============================== Copy to Clipboard Added ==============================

const copyButtons = document.getElementsByClassName("copy-button");
for (let button of copyButtons) {
  button.addEventListener("click", function () {
    alert("Copied!");
    const card = button.closest(".card-container");
    const serviceNumber = card.querySelector(".service-number").innerText;
    copyCount++;
    copyDisplay.innerText = copyCount;
    navigator.clipboard.writeText(serviceNumber);
  });
}
document.getElementById("copy-button");

// ================================= History Section Added =====================================
document.getElementById("clear-button").addEventListener("click", function () {
  historyDataDisplay = [];
  historyContainer.innerText = "";
});
