import React from "react";
import { Card, CardBody, MyImage } from "./SlideElements";

const Slide = (props) => {
  const { background, image } = props;
  return (
    <Card background={background}>
      <CardBody>{props.children}</CardBody>
      <MyImage src={image} />
    </Card>
  );
};

export default Slide;
