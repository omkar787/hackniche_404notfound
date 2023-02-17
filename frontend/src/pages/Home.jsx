import React from "react";
import { CenterSeparator } from "../components/Home/elements";
import LatestNews from "../components/Home/LatestNews";
import Middle from "../components/Home/Middle";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Slide from "../components/Slider/Slide";

const Home = () => {
  const items = [
    {
      title: "hello",
      img_src:
        "https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718__340.jpg",
    },
    {
      title: "hello",
      img_src:
        "https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718__340.jpg",
    },
    {
      title: "hello",
      img_src:
        "https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718__340.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <div style={{ background: "rgb(249 243 234)" }}>
        <Middle />
        <CenterSeparator>Trending News</CenterSeparator>
        <Slider>
          <Slide>Hello</Slide>
          <Slide>Hello</Slide>
          <Slide>Hello</Slide>
        </Slider>
        <CenterSeparator>Latest News</CenterSeparator>
        <LatestNews />
      </div>
    </div>
  );
};

export default Home;
