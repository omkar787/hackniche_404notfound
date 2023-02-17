import React, { useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  SliderContainer,
  Slider as SliderScroll,
  PreviousButton,
  NextButton,
} from "./SliderElements";

function throttle(cb, delay = 250) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

const Slider = (props) => {
  let slideIndex = 0;
  let max = props.children?.length || 0;
  const slider = useRef();
  let intervalId;
  let isTimer = false;

  const switchSlide = (cb) => {
    if (!slider.current) return;
    slideIndex = cb();
    if (slideIndex >= max) slideIndex = 0;
    if (slideIndex < 0) slideIndex = max - 1;
    if (isTimer) {
      clearInterval(intervalId);
      isTimer = false;
    }
    slider.current.style.setProperty("--slider-index", slideIndex);
    if (!isTimer) {
      intervalId = setInterval(() => handleNextClick(), 10000);
      isTimer = true;
    }
  };

  const handlePreviousClick = () => {
    switchSlide(() => slideIndex - 1);
  };

  const handleNextClick = () => {
    switchSlide(() => slideIndex + 1);
  };

  useEffect(() => {
    if (!isTimer) {
      intervalId = setInterval(() => handleNextClick(), 10000);
      isTimer = true;
    }
  }, []);

  return (
    <SliderContainer>
      <PreviousButton onClick={throttle(handlePreviousClick, 750)}>
        <IoIosArrowBack />
      </PreviousButton>
      <SliderScroll ref={slider}>{props.children}</SliderScroll>
      <NextButton onClick={throttle(handleNextClick, 750)}>
        <IoIosArrowForward />
      </NextButton>
    </SliderContainer>
  );
};

export default Slider;
