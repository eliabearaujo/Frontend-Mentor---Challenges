const submitButton = document.querySelector(".submit");
const scores = document.querySelector(".btn-container");
const rateText = document.querySelector(".score p");
const initialCard = document.querySelector(".initial-card");
const thankYouCard = document.querySelector(".thank-you-card");

function getRate(event) {
  const rate = event.target.innerText;
  rateText.innerHTML = `<p>You selected ${rate} out of 5.</p>`;
}

scores.addEventListener("click", getRate);

function send(event) {
  initialCard.classList.toggle("ocultar");
  thankYouCard.classList.toggle("ocultar");
}
submitButton.addEventListener("click", send);
