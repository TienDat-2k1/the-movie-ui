import './ViewHistoryPopup.scss';

function ViewHistoryPopup({ children }) {
  return (
    <div className="view-history-popup-container">
      <div className="view-history-popup-scroll">
        <ul className="view-history-popup-list-items">{children}</ul>
      </div>
      <div className="view-all-history">View all</div>
    </div>
  );
}
export default ViewHistoryPopup;
