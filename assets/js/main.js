const midias = document.querySelector('.social__medias');
const perfil = document.querySelector('.card__div-container');

const botaoAtivar = document.querySelector('.button__share').addEventListener("click", () => {


  perfil.style.display = 'none';
  midias.style.display = 'block';

});

const botaoDesativar = document.querySelector('.button-2').addEventListener("click", () => {

  perfil.style.display = 'block';
  midias.style.display = 'none';

});

