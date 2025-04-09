import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  showLoader();

  const searchText = event.currentTarget.elements['search-text'].value.trim();

  if (searchText === '') {
    iziToast.info({
      title: 'Caution',
      message: 'You forgot important data',
      position: 'topLeft',
    });
    hideLoader();
    return;
  }

  getImagesByQuery(searchText)
    .then(imgData => {
      clearGallery();

      createGallery(imgData);
    })
    .catch(error => console.log(error))
    .finally(hideLoader());
}
