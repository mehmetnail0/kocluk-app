import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";
import "./Projects.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import ReactDOM from "react-dom";

const Carousel = (props) => {
  const [scrollCarousel, setScrollCarousel] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const carouselItems = useRef();
  const [carouselWidth, setCarouselWidth] = useState(0);
  const posY = sessionStorage.getItem("posY");

  useEffect(() => {
    const element = document.getElementById("carouselTwo-items");
    const length = element.childElementCount;
    if (windowWidth < 800) {
      setCarouselWidth(`${length * 100}%`);
    } else if (windowWidth < 1080) {
      setCarouselWidth(`${(length * 100) / 2}%`);
    } else {
      setCarouselWidth(`${(length * 100) / 3}%`);
    }
  }, [windowWidth]);

  useEffect(() => {
    const pageHeight = sessionStorage.getItem("pageHeight");
    const activePosition = pageHeight / 4;
    if (posY < activePosition * 4 - 300 && posY >= activePosition * 3 - 300) {
      if (props.isElementHovered === false) {
        const carouselInterval = setInterval(() => {
          document.getElementById("carouselTwo-auto-button").click();
        }, 3000);
        return () => clearInterval(carouselInterval);
      }
    }
  }, [posY, props.isElementHovered]);
  useEffect(() => {
    const handleScroll = (e) => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  });
  const handleScrollLeft = () => {
    const element = document.getElementById("carouselTwo-items");
    const length = element.childElementCount;
    const elementWidth =
      (length * 100) /
      window
        .getComputedStyle(ReactDOM.findDOMNode(element))
        .getPropertyValue("min-width")
        .replace(/%/g, "");
    if (Math.floor(scrollCarousel + 100 / length > 0)) {
      if (Math.floor(scrollCarousel + 100 / length > 1)) {
        setScrollCarousel(-((length - elementWidth) * (100 / length)));
        return;
      }
      setScrollCarousel(0);
      return;
    }
    setScrollCarousel((scrollCarousel) => scrollCarousel + 100 / length);
  };
  const handleScrollRight = () => {
    const element = document.getElementById("carouselTwo-items");
    const length = element.childElementCount;
    const elementWidth =
      (length * 100) /
      window
        .getComputedStyle(ReactDOM.findDOMNode(element))
        .getPropertyValue("min-width")
        .replace(/%/g, "");
    if (
      Math.floor(scrollCarousel - 100 / length) <
      Math.floor(-(length - elementWidth) * (100 / length))
    ) {
      setScrollCarousel(0);
      return;
    }
    setScrollCarousel((scrollCarousel) => scrollCarousel - 100 / length);
  };

  const handleDotClick = (e) => {
    const element = document.getElementById("carouselTwo-items");
    const length = element.childElementCount;
    setScrollCarousel(-(100 / length) * e.target.id);
  };

  return (
    <div className="carouselTwo">
      <div id="carouselTwo" className="carouselTwo-wrapper">
        <div
          onClick={(e) => handleScrollLeft(e)}
          onPointerEnter={(e) => props.setIsElementHovered(true)}
          onPointerLeave={(e) => props.setIsElementHovered(false)}
          className="carouselTwo-arrow left"
        >
          <FaAngleLeft />
        </div>
        <div className="carouselTwo-slider">
          <div
            ref={carouselItems}
            style={{
              transform: `translateX(${scrollCarousel}%)`,
              minWidth: carouselWidth,
            }}
            id="carouselTwo-items"
            className="carouselTwo-items"
          >
            {props.children}
          </div>
        </div>
        <div
          onClick={(e) => handleScrollRight(e)}
          onPointerEnter={(e) => props.setIsElementHovered(true)}
          onPointerLeave={(e) => props.setIsElementHovered(false)}
          id="carouselTwo-auto-button"
          className="carouselTwo-arrow right"
        >
          <FaAngleRight />
        </div>
        
      </div>
      <div className="dotsTwo">
        {(() => {
          const element = carouselItems?.current;
          const length = element?.childElementCount;
          const elementWidth = element
            ? Math.floor(
                (length * 100) /
                  window
                    .getComputedStyle(ReactDOM.findDOMNode(element))
                    .getPropertyValue("min-width")
                    .replace(/%/g, "")
              )
            : null;
          const isDotActive = Math.floor(
            Math.floor(Math.abs(scrollCarousel)) / Math.floor(100 / length)
          );
          const dots = [];
          for (let i = 0; i < length - (elementWidth - 1); i++) {
            dots.push(
              <div
                onClick={(e) => handleDotClick(e)}
                id={i}
                className={isDotActive === i ? "dotTwo active" : "dotTwo"}
                key={i}
              />
            );
          }
          return dots;
        })()}
      </div>
    </div>
  );
};

export default Carousel;