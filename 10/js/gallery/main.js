import { renderThumbnails } from './thumbnails.js';
import { renderPopup } from './popup.js';

const renderGallery = (photosData) => {
  renderThumbnails(photosData);
  document.addEventListener('thumbnailSelect', (event) => {
    renderPopup(event.detail);
  });
};

export { renderGallery };
