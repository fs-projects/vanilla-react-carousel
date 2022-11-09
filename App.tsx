import * as React from 'react';
import { images } from './data';
import './style.css';

export default function App() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [autoPlay, setAutoPlay] = React.useState(true);
  let timer = null;
  console.log('currentIndex', currentIndex);
  const handleLeftClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  const handleRightClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handleDotClick = (i) => {
    setCurrentIndex(i);
  };

  React.useEffect(() => {
    autoPlay &&
      setTimeout(() => {
        handleRightClick();
      }, 1500);
  }, []);

  const handleMouseEnter = () => {
    setAutoPlay(false);
    clearTimeout(timer);
  };
  const handleMouseLeave = () => {
    setAutoPlay(true);
  };
  return (
    <div>
      <div
        className="carouselWrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {images &&
          images.map((el, i) => {
            return (
              <div
                key={i}
                className={`${
                  i === currentIndex
                    ? 'carouselCard carouselCardActive'
                    : 'carouselCard'
                }`}
              >
                <img src={el.image} className="carouselImg" />
                <div className="overlay"></div>
                <div className="heading">{el.key}</div>
              </div>
            );
          })}
        <div className="carouselArrowLeft" onClick={handleLeftClick}>
          &lsaquo;
        </div>
        <div className="carouselArrowRight" onClick={handleRightClick}>
          &rsaquo;
        </div>
        <div className="dotContainer">
          {images.map((_, i) => {
            return (
              <span
                key={i}
                className={`${i === currentIndex ? 'dot dotActive' : 'dot'}`}
                onClick={() => handleDotClick(i)}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
