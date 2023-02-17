import React from "react";
import {
  Card,
  SlideDescription,
  SlideHeading,
  TextWrapper,
} from "./SlideElements";

const Slide = ({ image, title, description, children }) => {
  return (
    <Card
      style={{ position: "relative" }}
      background={image ? `url(${image})` : null}
    >
      <TextWrapper>
        <SlideHeading>{title}</SlideHeading>
        <SlideDescription>{description}</SlideDescription>
      </TextWrapper>
    </Card>
  );
};

export default Slide;
