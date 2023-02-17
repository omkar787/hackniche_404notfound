import styled from "styled-components";

export const SlideButton = styled.button`
  outline: none;
  border: none;
  opacity: 0;
  z-index: 5;
  position: absolute;
  top: 45%;
  height: 5rem;
  background: transparent;
  border-radius: 0.5rem;
  padding: 1rem 0.2rem;
  transition: opacity 500ms ease-in, background 200ms ease-in-out,
    scale 800ms ease-in;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.7);
  }
  &:active {
    transform: scale(1);
  }
  & svg {
    color: white;
    font-size: 2rem;
  }
`;

export const PreviousButton = styled(SlideButton)`
  left: 10px;
`;

export const NextButton = styled(SlideButton)`
  right: 10px;
`;

export const SliderContainer = styled.div`
  width: 100%;
  background-color: salmon;
  position: relative;
  overflow: hidden;

  &:hover ${SlideButton} {
    opacity: 1;
  }
`;
export const Slider = styled.div`
  --slider-index: 0;
  display: flex;
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 1s ease;
  & > div {
    min-width: 100%;
  }
`;

export const Frame = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  background-image: linear-gradient(rgb(254, 9, 9), rgb(227, 7, 224, 0.966));
`;
