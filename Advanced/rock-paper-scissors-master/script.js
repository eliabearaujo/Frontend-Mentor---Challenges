// Modal
const botaoAbrir = document.querySelector('.rules');
const botaoFechar = document.querySelector('.fechar');
const containerModal = document.querySelector('.modal-container');
const containerOpcoes = document.querySelector('.choices');
const opcoes = document.querySelectorAll('.option');
const stepTwo = document.querySelector('.step-2');
const pChoice = document.querySelector('.p-choice');
const hChoice = document.querySelector('.h-choice');
const score = document.querySelector('.score');
const textHPick = document.querySelector('.h-pick');
const winText = document.querySelector('.definition');
const endGameContainer = document.querySelector('.end-game');
const playAgainButton = document.querySelector('.again');

//Adiciona a classe ativo ao modal
function toggleModal() {
  containerModal.classList.toggle('ativo');
}

//Chama a função que fecha o modal.
function eventToggleModal(event) {
  toggleModal();
}

//Verifica o clique fora do modal e fecha o mesmo.
function cliqueForaModal(event) {
  if (event.target === containerModal) {
    toggleModal();
  }
}

//Adiciona os eventos nos elementos.
function addModalEvents() {
  botaoAbrir.addEventListener('click', eventToggleModal);
  botaoFechar.addEventListener('click', eventToggleModal);
  containerModal.addEventListener('click', cliqueForaModal);
}

//Verifica se os botões existem e e chama a função que adiciona os eventos.
function init() {
  if (botaoAbrir && botaoFechar && containerModal) {
    addModalEvents();
  }
}

init();

//Desenvolvimento do jogo

function addEvents() {
  opcoes.forEach((opcao) => {
    opcao.addEventListener('click', playerPick);
  });
  playAgainButton.addEventListener('click', startOver);
}
addEvents();

function playerPick(event) {
  const indexClicado = event.target.getAttribute('data-number');
  const houseChoice = housePick();
  createElements(indexClicado, houseChoice);
  setTimeout(() => {
    checkWin(indexClicado, houseChoice);
  }, 300);
}

function housePick() {
  const numeroDeEscolhas = opcoes.length - 1;
  const escolhaDaCasa =
    Math.floor(Math.random() * (numeroDeEscolhas - 0 + 1)) + 0;
  return escolhaDaCasa;
}

function moveToStepTwo() {
  containerOpcoes.classList.add('hide');
  stepTwo.classList.add('ativo');
}

function createElements(playerChoice, houseChoice) {
  moveToStepTwo();
  const clonePlayerChoice = opcoes[playerChoice].cloneNode(true);
  const cloneHouseChoice = opcoes[houseChoice].cloneNode(true);
  clonePlayerChoice.removeEventListener('click', playerPick);
  cloneHouseChoice.removeEventListener('click', playerPick);
  clonePlayerChoice.classList.remove('option');
  clonePlayerChoice.classList.add('picked');
  cloneHouseChoice.classList.remove('option');
  cloneHouseChoice.classList.add('picked');
  pChoice.appendChild(clonePlayerChoice);
  setTimeout(() => {
    hChoice.appendChild(cloneHouseChoice);
  }, 300);
}

function checkWin(playerChoice, houseChoice) {
  const calc = playerChoice - houseChoice;
  let win = '';
  if (playerChoice == houseChoice) {
    win = 'Draw';
  } else if ((calc % 2 != 0 && calc < 0) || (calc % 2 === 0 && calc > 0)) {
    score.innerText = +`${score.innerText}` + 1;
    pChoice.style.boxShadow = ' 0px 0px 134px 55px lightgrey';
    win = 'You win';
  } else {
    hChoice.style.boxShadow = ' 0px 0px 134px 55px lightgrey';
    win = 'You lose';
  }
  winText.innerText = `${win}`;
  textHPick.classList.add('ativo');
  stepTwo.classList.add('colunas');
  endGameContainer.classList.add('ativo');
}

function startOver() {
  stepTwo.classList.remove('ativo');
  containerOpcoes.classList.remove('hide');
  pChoice.innerHTML = '';
  hChoice.innerHTML = '';
  pChoice.style.boxShadow = '';
  hChoice.style.boxShadow = '';
}
