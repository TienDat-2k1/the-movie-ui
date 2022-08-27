import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../../api/tmdbApi';

const MovieTrailer = ({ title, id }) => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const getKey = async id => {
      const res = await fetch(api(`movie/${id}/videos`, '&language=en-US'));
      const data = await res.json();
      console.log(data);
      const getTrailer = data.results.find(result => result.type === 'Trailer');
      console.log(getTrailer);
      const { key } = getTrailer;
      setKey(key);
    };
    getKey(id);
  }, [id]);

  return (
    <div className="content__trailer" id="trailer">
      <h4 className="heading-4 heading-4--light heading-4--weight">
        Trailer: {title}
      </h4>
      <div className="content__trailer-youtube">
        <iframe
          className="content__trailer-youtube--video"
          title={title}
          width="100%"
          src={`https://www.youtube.com/embed/${key}`}
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};
export default MovieTrailer;
