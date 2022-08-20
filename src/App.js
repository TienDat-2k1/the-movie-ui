import { Routes, Route } from 'react-router-dom';
// import SignInPage from './components/pages/Auth-page/SignInPage';
// import SignUpPage from './components/pages/Auth-page/SignUpPage';
// import MovieDetailPage from './components/pages/movie-detail-page/MovieDetailPage';
import Auth from './router/auth/Auth';
import Navigate from './router/navigate/Navigate';
import Home from './views/home/Home';
import MovieDetail from './views/movie-detail/MovieDetail';
import Movie from './views/movie/Movie';

import './sass/_global.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route index element={<Home />} />

          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:idMovie" element={<MovieDetail />} />
          {/* <Route path="/movie/:idMovie" element={<MovieDetailPage />} /> */}
        </Route>
        {/* <Route path="auth" element={<Auth />}>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
