const imageUrl = (path, option = 'original') =>
  `https://image.tmdb.org/t/p/${option}${path}`;
export default imageUrl;
