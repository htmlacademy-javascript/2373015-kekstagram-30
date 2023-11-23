const template = document.querySelector('#picture');
const container = document.querySelector('.pictures');

const createThumbnailClickHandler = ({ url, description, likes, comments }) => (event) => {
  event.preventDefault();
  document.dispatchEvent(new CustomEvent('thumbnailSelect', { detail: { url, description, likes, comments } }));
};

const renderThumbnails = (photosData) => {
  const fragment = document.createDocumentFragment();
  const thumbnails = container.querySelectorAll('.picture');

  thumbnails.forEach((existingThumbnail) => existingThumbnail.remove());

  photosData.forEach(({ url, description, likes, comments }) => {
    const newThumbnail = template.content.querySelector('.picture').cloneNode(true);

    newThumbnail.querySelector('.picture__img').src = url;
    newThumbnail.querySelector('.picture__img').alt = description;
    newThumbnail.querySelector('.picture__likes').textContent = likes;
    newThumbnail.querySelector('.picture__comments').textContent = comments.length;
    newThumbnail.addEventListener('click', createThumbnailClickHandler({ url, description, likes, comments }));

    fragment.append(newThumbnail);
  });
  container.append(fragment);
};

export { renderThumbnails };
