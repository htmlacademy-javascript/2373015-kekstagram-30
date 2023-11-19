import { renderGallery } from './gallery/main.js';
import { setSubmitDisabled, resetForm } from './upload/main.js';
import { renderStatus, hideErrorAfterDelay } from './status.js';
import { request } from './util.js';

const baseURL = 'https://30.javascript.pages.academy/kekstagram';

document.addEventListener('formdata', async (event) => {
  try {
    setSubmitDisabled(true);
    await request(baseURL, { method: 'post', body: event.formData });
    resetForm();
    renderStatus('success');
  } catch {
    renderStatus('error');
  } finally {
    setSubmitDisabled(false);
  }
});

try {
  renderGallery(await request(`${baseURL}/data`));
} catch {
  renderStatus('data-error');
  hideErrorAfterDelay();
}
