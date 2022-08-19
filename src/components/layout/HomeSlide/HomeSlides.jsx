import Slider from 'react-slick';
import NextSlideArrow from '../arrow/HomeSlideArrow/NextSlideArrow';
import PrevSlideArrow from '../arrow/HomeSlideArrow/PrevSlideArrow';
import Spinner from '../spinner/Spinner';
import HomeSlide from './HomeSlide';

function HomeSlides({ items }) {
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

    nextArrow: <NextSlideArrow />,
    prevArrow: <PrevSlideArrow />,
  };
  return (
    <div className="home-slide">
      <Slider {...settings}>
        {!items && <Spinner />}
        {items &&
          items.results.map(item => <HomeSlide key={item.id} item={item} />)}
      </Slider>
    </div>
  );
}
export default HomeSlides;
