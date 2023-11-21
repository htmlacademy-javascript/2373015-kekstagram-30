import { renderThumbnails } from './thumbnails.js';
import { renderPopup } from './popup.js';
import { renderFilters } from './filters.js';

const renderGallery = (photosData) => {
  renderFilters();
  renderThumbnails(photosData);

  document.addEventListener('thumbnailSelect', (event) => {
    renderPopup(event.detail);
  });
};

export { renderGallery, renderFilters };
