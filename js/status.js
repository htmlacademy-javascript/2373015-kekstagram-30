const renderStatus = (type) => {
  const template = document.querySelector(`#${type}`);
  const status = template.content.querySelector(`.${type}`);

  const onDocumentKeyDown = (event) => {
    if (event.key.startsWith('Esc') && !event.target.type?.startsWith('text')) {
      status.click();
    }
  };

  status.addEventListener('click', (event) => {
    if (event.target.matches(`.${type}, .${type}__button`)) {
      status.remove();
      document.removeEventListener('keydown', onDocumentKeyDown);
    }
  });
  document.body.append(status);
  document.addEventListener('keydown', onDocumentKeyDown);
};

const hideErrorMessage = (errorClass) => {
  const timeout = 5000;
  if (errorClass) {
    setTimeout(() => {
      errorClass.classList.add('hidden');
    }, timeout);
  }
};

const hideErrorAfterDelay = () => {
  const errorMessageClass = document.querySelector('.data-error');
  hideErrorMessage(errorMessageClass);
};

export { renderStatus, hideErrorAfterDelay };
