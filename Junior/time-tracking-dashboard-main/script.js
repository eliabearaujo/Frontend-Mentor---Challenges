const links = document.querySelectorAll('.menu li a');
const category = document.querySelectorAll('.category');
const current_time = document.querySelectorAll('.current-time');
const previous_period = document.querySelectorAll('.previous-period');
const previous_time = document.querySelectorAll('.previous-time');

async function fetchData() {
  const dataPromise = await fetch('./data.json');
  const data = await dataPromise.json();
  return await data;
}

const result = fetchData();
console.log(result);

function categoryUpdate() {
  category.forEach((category) => {
    category.innerText = 'data.';
  });
}
function dailyUpdate() {}

links[0].addEventListener('click', dailyUpdate);
