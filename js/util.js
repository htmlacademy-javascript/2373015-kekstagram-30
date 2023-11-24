const request = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

const DEBOUNCE_DELAY = 500;

const debounce = (callback) => {
  let timeoutId;
  return (...rest) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...rest), DEBOUNCE_DELAY);
  };
};

export { request, debounce };
