import { renderGallery } from './gallery/main.js';
import './upload/main.js';
import { renderStatus, hideErrorAfterDelay } from './status.js';
import { request } from './util.js';

const baseURL = 'https://30.javascript.pages.academy/kekstagram';

try {
  renderGallery(await request(`${baseURL}/data`));
} catch {
  renderStatus('data-error');
  hideErrorAfterDelay();
}
