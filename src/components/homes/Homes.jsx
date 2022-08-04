import { useEffect, useState } from 'react';
import Movies from '../movies/Movies';
import Home from './Home';
import './Home.scss';
import api from '../../api/tmdbApi';

function Homes() {
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchTrending = async (media_type, time_window) => {
      try {
        const res = await fetch(api(`trending/${media_type}/${time_window}`));
        const data = await res.json();
        setItems(data);
      } catch (error) {}
    };
    fetchTrending('movie', 'week');
  }, []);
  return (
    <>
      <section className="home">
        <Home items={items} />
      </section>
      <div className="margin"></div>
      <Movies title="now_playing" />
      <div className="margin"></div>
      <Movies title="upcoming" isFullDate={true} />
      <div className="margin"></div>
      <Movies title="popular" />
      <div className="margin"></div>
      <Movies title="top_rated" />
    </>
  );
}
export default Homes;
