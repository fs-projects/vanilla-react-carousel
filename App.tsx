import * as React from 'react';
import { images } from './data';
import './style.css';

export default function App() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
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
  return (
    <div>
      <div className="carouselWrapper">
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
                className={`${i === currentIndex ? 'dot dotActive' : 'dot'}`}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
