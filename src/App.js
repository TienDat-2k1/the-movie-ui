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
import SearchResults from './views/search/SearchResults';
import SignUp from './views/Auth/SignUp';
import SignIn from './views/Auth/SignIn';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:idMovie" element={<MovieDetail />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
