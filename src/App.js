import { Routes, Route } from 'react-router-dom';
import './App.scss';
import MovieDetailPage from './components/pages/movie-detail-page/MovieDetailPage';
import HomePage from './home/HomePage';
import Movie from './router/movie/Movie';
import Navigate from './router/navigate/Navigate';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movies/:idMovie" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
