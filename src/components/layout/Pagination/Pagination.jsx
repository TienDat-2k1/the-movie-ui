import './Pagination.scss';

import ReactPaginate from 'react-paginate';
function Pagination({ pagination }) {
  if (!pagination) return;
  const { totalPages, onPageChange } = pagination;

  return (
    <ReactPaginate
      nextLabel=">>"
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={totalPages}
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
