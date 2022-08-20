import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  movieFilterGenres,
  pageActiveSelector,
  sortTypeSelector,
  totalPageSelector,
} from '../../../store/movie/movieSelector';
import './Pagination.scss';
import {
  fetchMovieGridStart,
  filterWithGenresStart,
  setPageActive,
} from '../../../store/movie/movieSlice';
import ReactPaginate from 'react-paginate';
function Pagination() {
  const pageRef = useRef();
  const dispatch = useDispatch();
  const pageActive = useSelector(pageActiveSelector);

  useEffect(() => {
    if (pageRef.current?.slickGoTo) {
      pageRef.current.slickGoTo(pageActive);
    }
  }, [pageActive]);

  const getTotalPage = useSelector(totalPageSelector);
  const getGenres = useSelector(movieFilterGenres);
  const sortType = useSelector(sortTypeSelector);

  const handlerPageChange = newPage => {
    if (!!getGenres) {
      dispatch(
        fetchMovieGridStart({
          type: sortType,
          page: newPage.selected + 1,
        })
      );
    } else {
      dispatch(
        filterWithGenresStart({ genres: getGenres, page: newPage.selected + 1 })
      );
    }
  };

  return (
    <ReactPaginate
      nextLabel=">>"
      onPageChange={handlerPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={getTotalPage}
      previousLabel="<<"
      pageClassName="pagination__item"
      pageLinkClassName="pagination__link"
      previousClassName="pagination__item"
      previousLinkClassName="pagination__link"
      nextClassName="pagination__item"
      nextLinkClassName="pagination__link"
      breakLabel="..."
      breakClassName="pagination__item"
      breakLinkClassName="pagination__link"
      containerClassName="pagination__list"
      activeClassName="pagination__item--active"
      renderOnZeroPageCount={null}
    />
  );
}
export default Pagination;

// <div className="pagination ">
//       <ul className="pagination__list">
//         <li
//           // key={item}
//           className={`pagination__item ${
//             pageActive === item ? 'pagination__item--active' : ''
//           }`}
//           onClick={() => {
//             pageChangeHandler(item);
//           }}
//         >
//           <a
//             href="#sort"
//             className={`pagination__link ${
//               pageActive === item ? 'pagination__link--active' : ''
//             }`}
//           >
//             {item}
//           </a>
//         </li>
//       </ul>
//     </div>

// <Slider {...settings} ref={pageRef}>
// {totalPages.length &&
//   totalPages.map(item => (
//     <li
//       key={item}
//       className={`pagination__item ${
//         pageActive === item ? 'pagination__item--active' : ''
//       }`}
//       onClick={() => {
//         pageChangeHandler(item);
//       }}
//     >
//       <a
//         href="#sort"
//         className={`pagination__link ${
//           pageActive === item ? 'pagination__link--active' : ''
//         }`}
//       >
//         {item}
//       </a>
//     </li>
//   ))}
// </Slider>
