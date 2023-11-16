import '../../vendor/pristine/pristine.min.js';

const form = document.querySelector('.img-upload__form');
const maxHashtag = 5;
const maxHashtagLength = 20;
const maxDescriptionLength = 140;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const split = (text) => text.split(' ').filter(Boolean);

pristine.addValidator(form.hashtags, (text) => (
  split(text).every((word) => /^#[a-zа-яё0-9]+$/i.test(word))
), 'Неправильный хеш-тег', 1, true);

pristine.addValidator(form.hashtags, (text) => (
  new Set(split(text.toLowerCase())).size === split(text).length
), 'Повторяющийся хеш-тег', 1, true);

pristine.addValidator(form.hashtags, (text) => (
  split(text).length <= maxHashtag
), 'Превышен лимит хеш-тегов', 1, true);

pristine.addValidator(form.hashtags, (text) => (
  split(text).every((word) => word.length <= maxHashtagLength)
), 'Превышена максимальная длина', 1, true);

pristine.addValidator(form.description, (text) => (
  text.length <= maxDescriptionLength
), 'Превышен лимит символов', 1, true);

const checkValidity = () => pristine.validate();
const resetValidity = () => pristine.reset();

export { checkValidity, resetValidity };
