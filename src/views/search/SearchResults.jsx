import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../api/tmdbApi';
import MovieGrid from '../../components/layout/MovieGrid/MovieGrid';
import {
  searchKeySelector,
  searchPageSelector,
} from '../../store/movie/movieSelector';
import { setSearchPage } from '../../store/movie/movieSlice';
import ResultsNotFound from './ResultsNotFound';
import './SearchResults.scss';

function SearchResults() {
  const dispatch = useDispatch();
  const searchKey = useSelector(searchKeySelector);
  const pageResults = useSelector(searchPageSelector);

  const [searchResults, setSearchResults] = useState();
  useEffect(() => {
    const fetchWithSearchKey = async (key, page) => {
      if (!key) return;
      const res = await fetch(
        api(
          'search/multi',
          `&language=en-US&query=${key}&page=${page}&include_adult=false`
        )
      );
      const data = await res.json();
      setSearchResults(data);
    };
    fetchWithSearchKey(searchKey, pageResults);
    window.scrollTo(0, 0);
  }, [searchKey, pageResults]);

  const resultsPageChange = page => {
    dispatch(setSearchPage(page.selected + 1));
  };

  const pagination = {
    totalPages: searchResults && searchResults.total_pages,
    onPageChange: resultsPageChange,
  };

  return (
    <main className="search-results container">
      <div className="search-results__header">
        <h4 className="heading-4 heading-4--light heading-4--weight results__heading">
          {`Results for "${searchKey.toUpperCase()}" . . .`}
        </h4>
      </div>
      {!searchResults?.results && <ResultsNotFound />}
      {searchResults?.results && (
        <MovieGrid movieGrid={searchResults.results} pagination={pagination} />
      )}
    </main>
  );
}
export default SearchResults;
