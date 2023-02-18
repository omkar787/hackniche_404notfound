import { Autocomplete, Chip, TextField } from "@mui/material";
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
  const [topNews, setTopNews] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    const query = async () => {
      const result = await instance.get("/news");
      setNews(result.data.data.data);
    };
    const topNews = async () => {
      const result = await instance.get("/news/top-5-news");
      setTopNews(result.data.data.data);
    };
    topNews();
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
        {!user ? (
          <NotLogin topNews={topNews} news={news} />
        ) : (
          <WhenLogin user={user} />
        )}
      </div>
    </div>
  );
};

const WhenLogin = ({ user }) => {
  const [news, setNews] = useState([]);
  const [value, setValue] = useState([]);
  const [liked, setLiked] = useState([]);

  const query = async () => {
    const res = await instance.get(`/news/?category=${user.category.join()}`);
    if (res.data?.data?.data) {
      setNews(res.data.data.data);
    }
  };

  const likeQuery = async () => {
    const temp = await instance.get("/likes/all-liked");
    console.log("like log", temp.data);
    const arr = temp.data.map((e) => e.newsId);
    console.log("arr", arr);
    setLiked(arr);
  };

  const toggleLike = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((e) => e !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  useEffect(() => {
    query();
    if (user) {
      likeQuery();
    }
  }, []);

  useEffect(() => {
    if (value.length === 0) query();
    else {
      const filterSearch = async () => {
        const res = await instance.get(
          `/news/?category=${value.map((e) => e.toLowerCase()).join()}`
        );
        setNews(res.data.data.data.sort(() => Math.random() - 0.5));
      };
      filterSearch();
    }
  }, [value]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "140px",
        }}
      >
        <CenterSeparator
          style={{
            textAlign: "left",
            paddingLeft: "130px",
            boxSizing: "border-box",
          }}
        >
          Your Feed:{" "}
        </CenterSeparator>
        <Autocomplete
          multiple
          options={filter.map((option) => option.label)}
          limitTags={2}
          value={value}
          style={{
            minWidth: "300px",
            maxWidth: "800px",
          }}
          onChange={(e, n) => {
            console.log("n", n);
            const temp = [...n];
            setValue(temp);
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                style={{
                  background: "white",
                  marginRight: "20px",
                }}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Filter"
              placeholder="Filter"
              style={{
                background: "white",
                borderRadius: "4px",
              }}
            />
          )}
        />
      </div>
      <LatestNews news={news} likeData={liked} toggleLike={toggleLike} />
    </>
  );
};

const NotLogin = ({ news, topNews }) => {
  return (
    <>
      <CenterSeparator style={{ paddingTop: "102px", paddingBottom: "40px" }}>
        Trending News
      </CenterSeparator>
      <Slider>
        {topNews.map((ele, i) => {
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

const filter = [
  { key: "business", label: "Business" },
  { key: "entertainment", label: "Entertainment" },
  { key: "environment", label: "Environment" },
  { key: "food", label: "Food" },
  { key: "health", label: "Health" },
  { key: "politics", label: "Politics" },
  { key: "science", label: "Science" },
  { key: "sports", label: "Sports" },
  { key: "technology", label: "Technology" },
  { key: "world", label: "World" },
];
export default Home;
