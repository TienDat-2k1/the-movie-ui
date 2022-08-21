import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageUrl from '../../../../api/imageUrl';
import api from '../../../../api/tmdbApi';
import PopupItem from '../../headerPopUp/PopupItem';

function PopupHistoryItem({ itemId }) {
  const navigate = useNavigate();
  const [item, setItem] = useState();
  useEffect(() => {
    const fetchItem = async id => {
      const res = await fetch(api(`/movie/${id}`));
      const data = await res.json();
      setItem(data);
    };
    fetchItem(itemId);
  }, [itemId]);

  const redirectHandler = () => {
    navigate(`/movie/${item.id}`);
  };

  return (
    <>
      {item && (
        <PopupItem className="popup-history__item" onClick={redirectHandler}>
          <div className="history__image-box">
            <img
              src={imageUrl(item.backdrop_path)}
              alt=""
              className="history__image"
            />
            <span className="history__time-duration">1:20:53</span>
          </div>
          <div className="history__main">
            <h4 className="heading-4 heading-4--dark history__heading">
              {item.title}
            </h4>
            <div className="history__genres">
              {item.genres
                .filter((_, i) => i < 1)
                .map(genre => (
                  <span key={genre.id} className="history__genre">
                    {genre.name}
                  </span>
                ))}
              {/* <span className="history__genre">action</span>
          <span className="history__genre">action</span>
          <span className="history__genre">action</span>
          <span className="history__genre">action</span> */}
            </div>
            <span className="history__date">2022-12-3</span>
            <span className="history__time">10:51</span>
          </div>
        </PopupItem>
      )}
    </>
  );
}
export default PopupHistoryItem;
