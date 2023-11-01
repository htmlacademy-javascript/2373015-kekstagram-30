const template = document.querySelector('#picture');
const container = document.querySelector('.pictures');

const renderThumbnails = (photosData) => {
  const fragment = document.createDocumentFragment();

  photosData.forEach(({ url, description, likes, comments }) => {
    const thumbnail = template.content.cloneNode(true);

    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;

    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export { renderThumbnails };
