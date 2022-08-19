import { useState, useEffect } from 'react';
import HomeSlides from '../../components/layout/HomeSlide/HomeSlides';
import api from '../../api/tmdbApi';
import './Home.scss';
import MoviesSlide from '../../components/layout/MoviesSlide/MoviesSlide';

function Home() {
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
    <main className="home">
      <HomeSlides items={items} />

      <MoviesSlide title="now_playing" />

      <MoviesSlide title="top_rated" />

      <MoviesSlide title="upcoming" />
    </main>
  );
}
export default Home;
