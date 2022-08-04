import HomeCard from './HomeCard';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from '../arrows/NextArrow';
import PrevArrow from '../arrows/PrevArrow';
import Loading from '../Loading/Loading';

function Home({ items }) {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // pauseOnHover: true,
    cssEase: 'linear',
    swipeToSlide: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="home-container">
        <Slider {...settings}>
          {!items && <Loading />}
          {items &&
            items.results.map(item => <HomeCard key={item.id} item={item} />)}
        </Slider>
      </div>
    </>
  );
}
export default Home;
