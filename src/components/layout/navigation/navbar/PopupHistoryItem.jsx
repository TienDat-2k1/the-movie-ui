import PopupItem from '../../headerPopUp/PopupItem';

function PopupHistoryItem() {
  return (
    <PopupItem className="popup-history__item">
      <div className="history__image-box">
        <img
          src="https://image.tmdb.org/t/p/original/ocUp7DJBIc8VJgLEw1prcyK1dYv.jpg"
          alt=""
          className="history__image"
        />
        <span className="history__time-duration">1:20:53</span>
      </div>
      <div className="history__main">
        <h4 className="heading-4 heading-4--dark history__heading">
          Spider-Man: No Way Home
        </h4>
        <div className="history__genres">
          <span className="history__genre">action</span>
          <span className="history__genre">action</span>
          <span className="history__genre">action</span>
          <span className="history__genre">action</span>
        </div>
        <span className="history__date">2022-12-3</span>
        <span className="history__time">10:51</span>
      </div>
    </PopupItem>
  );
}
export default PopupHistoryItem;
