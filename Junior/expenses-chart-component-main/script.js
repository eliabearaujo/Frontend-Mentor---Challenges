const chartsArea = document.querySelector('.charts');
let date = new Date();
let hoje = date.getDay();

//Fetch JSON
const data = fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((error) => console.log(error));
