import { renderThumbnails } from './thumbnails.js';
import { renderPopup } from './popup.js';
import { renderFilters } from './filters.js';
import { applyRandomFilter, applyDiscussedFilter } from './data.js';

const renderGallery = (photosData, reduceFrequency) => {
  renderFilters();
  renderThumbnails(photosData);

  document.addEventListener('filterSelect', reduceFrequency((event) => {
    switch (event.detail) {
      case 'filter-default':
        renderThumbnails(photosData);
        break;
      case 'filter-random':
        renderThumbnails(applyRandomFilter(photosData));
        break;
      case 'filter-discussed':
        renderThumbnails(applyDiscussedFilter(photosData));
        break;
    }
  }));

  document.addEventListener('thumbnailSelect', (event) => {
    renderPopup(event.detail);
  });
};

export { renderGallery, renderFilters };
