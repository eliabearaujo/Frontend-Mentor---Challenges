// Modal
const botaoAbrir = document.querySelector('.rules');
const botaoFechar = document.querySelector('.fechar');
const containerModal = document.querySelector('.modal-container');
const containerOpcoes = document.querySelector('.choices');
const opcoes = document.querySelectorAll('.option');
const stepTwo = document.querySelector('.step-2');
const pChoice = document.querySelector('.p-choice');
const hChoice = document.querySelector('.h-choice');

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

opcoes.forEach((opcao) => {
  opcao.addEventListener('click', playerPick);
});

// Ideia de refatoração para amanha ...
// Criar uma função apenas para escolha do player.
// Criar uma função apenas para escolha da casa.
// Criar uma função que cria o elemento do player.
// Criar uma função com tempo que será chamada após a execução da criação do player e criara a escolha da casa.

function playerPick(event) {
  hideOptions();
  const indexClicado = event.target.getAttribute('data-number');
  const novoElemento = opcoes[indexClicado];
  novoElemento.classList.remove('option');
  novoElemento.classList.add('picked');
  const novoElementoCasa = opcoes[housePick()];
  novoElementoCasa.classList.remove('option');
  novoElementoCasa.classList.add('picked');
  pChoice.appendChild(novoElemento);
  hChoice.appendChild(novoElementoCasa);
  console.log(pChoice);
  console.log(hChoice);
}

function housePick() {
  const numeroDeEscolhas = opcoes.length - 1;
  const escolhaDaCasa =
    Math.floor(Math.random() * (numeroDeEscolhas - 0 + 1)) + 0;
  return escolhaDaCasa;
}

function hideOptions() {
  containerOpcoes.classList.add('hide');
  stepTwo.classList.add('ativo');
}
