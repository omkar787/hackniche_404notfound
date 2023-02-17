import React, { useEffect, useState } from "react";
import instance from "../../utils/axiosInstance";
import { CenterSeparator } from "../components/Home/elements";
import LatestNews from "../components/Home/LatestNews";
import Middle from "../components/Home/Middle";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Slide from "../components/Slider/Slide";
import { useAuth } from "../context/authContext";

const Home = () => {
  const [news, setNews] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const query = async () => {
      const result = await instance.get("/news");
      setNews(result.data.data.data);
      console.log(result.data.data.data);
    };
    query();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: "#343434",
          background: "url(assets/space.jfif)",
          paddingTop: "60px",
        }}
      >
        <Middle />
        {!user ? <NotLogin news={news} /> : <WhenLogin user={user} />}
      </div>
    </div>
  );
};

const WhenLogin = ({ user }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const query = async () => {
      const res = await instance.get(`/news/?category=${user.category.join()}`);
      console.log("feed", res);
      if (res.data?.data?.data) {
        setNews(res.data.data.data);
      }
    };
    query();
  }, []);

  return (
    <>
      <CenterSeparator
        style={{
          textAlign: "left",
          paddingLeft: "130px",
          boxSizing: "border-box",
        }}
      >
        Your Feed:{" "}
      </CenterSeparator>
      <LatestNews news={news} />
    </>
  );
};

const NotLogin = ({ news }) => {
  return (
    <>
      <CenterSeparator style={{ paddingTop: "102px", paddingBottom: "40px" }}>
        Trending News
      </CenterSeparator>
      <Slider>
        {news.map((ele, i) => {
          return (
            <Slide
              key={i}
              image={ele.image_url}
              title={ele.title}
              description={ele.description}
            />
          );
        })}
      </Slider>
      <CenterSeparator style={{ paddingBottom: "20px" }}>
        Latest News
      </CenterSeparator>
      <LatestNews news={news} />
    </>
  );
};

export default Home;
