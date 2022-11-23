const chartsArea = document.querySelector('.charts');
let date = new Date();
let hoje = date.getDay();

//Fetch JSON
const data = fetch('./data.json')
  .then((response) => response.json())
  .catch((error) => console.log(error));

data.then((elementList) =>
  elementList.forEach((element) => {
    const chart = document.createElement('div');
    chart.classList.add('chart');
    chart.innerHTML = `
    <div class="bar" style="height:${element.amount * 1.5}%"></div>
    <div class="title">${element.day}</div>
    <div class="amount">$${element.amount}</div>
    `;
    chartsArea.appendChild(chart);
  })
);
