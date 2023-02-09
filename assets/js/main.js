const botaoAtivar = document.querySelector('.button__share').addEventListener("click", () => {

  const midias = document.querySelector('.social__medias');
  const perfil = document.querySelector('.card__div-container');

  perfil.style.display = 'none';
  midias.style.display = 'block';

  document.querySelector('.button_share').classList.toggle();

});

