const chartsArea = document.querySelector('.charts');
let date = new Date();
let hoje = date.getDay();

const data = fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
