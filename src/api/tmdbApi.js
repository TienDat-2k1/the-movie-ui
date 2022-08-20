import KEY from './apiKey';
const api = (path, option = '') => {
  return `https://api.themoviedb.org/3/${path}?api_key=${KEY}${option}`;
};
export default api;
