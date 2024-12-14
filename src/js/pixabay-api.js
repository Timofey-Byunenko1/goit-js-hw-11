export async function fetchImages(query) {
    const API_KEY = '47637626-a9f1551754daf4452dc005acb';
    const BASE_URL = 'https://pixabay.com/api/';
  
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
  
    return await response.json();
  }