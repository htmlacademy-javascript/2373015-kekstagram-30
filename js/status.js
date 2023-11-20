const renderStatus = (type, options = {}) => {
  const template = document.querySelector(`#${type}`);
  const status = template.content.querySelector(`.${type}`).cloneNode(true);

  const onDocumentKeyDown = (event) => {
    if (event.key.startsWith('Esc') && !event.target.type?.startsWith('text')) {
      status.click();
    }
  };

  const onStatusClick = (event) => {
    if (event.target.matches(`.${type}, .${type}__button`)) {
      status.remove();
      document.removeEventListener('keydown', onDocumentKeyDown);
    }
  };

  document.body.append(status);
  document.addEventListener('keydown', onDocumentKeyDown);

  if (options.hideAfterDelay) {
    window.setTimeout(() => status.remove(), options.hideAfterDelay);
  } else {
    status.addEventListener('click', onStatusClick);
    document.addEventListener('keydown', onDocumentKeyDown);
  }
};

export { renderStatus };
