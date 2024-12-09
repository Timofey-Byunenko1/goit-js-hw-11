import { fetchImages } from './pixabay-api.js';
import { renderGallery } from './render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const query = e.currentTarget.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.warning({ message: 'Please enter a search query!' });
    return;
  }

  loader.style.display = 'block';
  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({ message: 'No images found. Try another query.' });
        return;
      }
      renderGallery(data.hits, gallery);
    })
    .catch(() => {
      iziToast.error({ message: 'Something went wrong. Please try again.' });
    })
    .finally(() => {
      loader.style.display = 'none';
      form.reset();
    });
}