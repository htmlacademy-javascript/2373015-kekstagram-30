const [scaleDownButton, display, scaleUpButton] = document.querySelectorAll('.scale__control');
const settings = { min: 25, max: 100, step: 25, defaultValue: 100, };

const setScale = (value) => {
  value = Math.max(value, settings.min);
  value = Math.min(value, settings.max);
  display.value = `${value}%`;
  display.dispatchEvent(new Event('change', { bubbles: true }));
};

const getScale = () => Number.parseFloat(display.value);
const scaleDown = () => setScale(getScale() - settings.step);
const scaleUp = () => setScale(getScale() + settings.step);
const resetScale = () => setScale(settings.defaultValue);

scaleDownButton.addEventListener('click', () => scaleDown());
scaleUpButton.addEventListener('click', () => scaleUp());

export { getScale, resetScale };
