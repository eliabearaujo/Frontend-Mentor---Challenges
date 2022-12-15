const links = document.querySelectorAll('.menu li a');
const category = document.querySelectorAll('.category');
const current_time = document.querySelectorAll('.current-time');
const previous_period = document.querySelectorAll('.previous-period');
const previous_time = document.querySelectorAll('.previous-time');

async function fetchData() {
  const dataPromise = await fetch('./data.json');
  const data = await dataPromise.json();
  categoryUpdate(data);
  console.log(data);
  return await data;
}
fetchData();

function categoryUpdate(data) {
  category.forEach((category, index) => {
    category.innerText = data[index].title;
  });
}

function dailyUpdate() {
  this.style.color = 'white';
}

links[0].addEventListener('click', dailyUpdate);
