const links = document.querySelectorAll('.menu li a');
const current_time = document.querySelectorAll('.current-time');
const previous_period = document.querySelectorAll('.previous-period');
const previous_time = document.querySelectorAll('.previous-time');

async function fetchData() {
  const dataPromise = await fetch('./data.json');
  const data = await dataPromise.json();
  return await data;
}

function addEvents() {
  const event = 'click';
  links.forEach((link) => {
    link.addEventListener(event, updateContent);
  });
}

function categoryUpdate(data) {
  const category = document.querySelectorAll('.category');
  category.forEach((category, index) => {
    category.innerText = data[index].title;
  });
}

async function updateContent() {
  const data = await fetchData();
  const link = this.innerText;
  changeLinkColor();
  this.style.color = 'white';
  if (link === 'Daily') {
    updateDaily(data);
  } else if (link === 'Weekly') {
    updateWeekly(data);
  } else {
    updateMonthly(data);
  }
}

function updateDaily(data) {
  current_time.forEach((time, index) => {
    time.innerText = data[index].timeframes.daily.current + 'hrs';
  });
  previous_period.forEach((period) => (period.innerText = 'Day'));
  previous_time.forEach((time, index) => {
    time.innerText = data[index].timeframes.daily.previous + 'hrs';
  });
}

function updateWeekly(data) {
  current_time.forEach((time, index) => {
    time.innerText = data[index].timeframes.weekly.current + 'hrs';
  });
  previous_period.forEach((period) => (period.innerText = 'Week'));
  previous_time.forEach((time, index) => {
    time.innerText = data[index].timeframes.weekly.previous + 'hrs';
  });
}

function updateMonthly(data) {
  current_time.forEach((time, index) => {
    time.innerText = data[index].timeframes.monthly.current + 'hrs';
  });
  previous_period.forEach((period) => (period.innerText = 'Month'));
  previous_time.forEach((time, index) => {
    time.innerText = data[index].timeframes.monthly.previous + 'hrs';
  });
}

function changeLinkColor() {
  links.forEach((link) => {
    link.style.color = 'hsl(235, 45%, 61%)';
  });
}

async function init() {
  const data = await fetchData();
  categoryUpdate(data);
  addEvents();
  updateDaily(data);
}
init();
