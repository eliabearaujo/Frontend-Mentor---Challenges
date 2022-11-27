const id = document.querySelector('.id');
const advice = document.querySelector('.advice');
const dice = document.querySelector('.dice');

let data = '';
async function fetchData() {
  data = await (await fetch('https://api.adviceslip.com/advice')).json();
  changeContent(data);
}

function changeContent(data) {
  id.innerText = data.slip.id;
  advice.innerText = data.slip.advice;
}

fetchData();
