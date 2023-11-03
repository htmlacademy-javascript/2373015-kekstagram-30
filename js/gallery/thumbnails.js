const template = document.querySelector('#picture');
const container = document.querySelector('.pictures');

const createThumbnailClickHandler = ({ url, description, likes, comments }) => (event) => {
  event.preventDefault();
  document.dispatchEvent(new CustomEvent('thumbnailSelect', { detail: { url, description, likes, comments } }));
};

const renderThumbnails = (photosData) => {
  const fragment = document.createDocumentFragment();

  photosData.forEach(({ url, description, likes, comments }) => {
    const thumbnail = template.content.querySelector('.picture').cloneNode(true);

    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.addEventListener('click', createThumbnailClickHandler({ url, description, likes, comments }));

    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export { renderThumbnails };
