import { renderComments } from './comments';

const popup = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');

const onDocumentKeyDown = (event) => {
  if (event.key.startsWith('Esc')) {
    closeButton.click();
  }
};

const openPopup = () => {
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
};

const closePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

const renderPopup = ({ url, description, likes, comments }) => {
  popup.querySelector('.big-picture__img img').src = url;
  popup.querySelector('.likes-count').textContent = likes;
  popup.querySelector('.social__caption').textContent = description;
  renderComments(comments);
  openPopup();
};

closeButton.addEventListener('click', () => closePopup());

export { renderPopup };
