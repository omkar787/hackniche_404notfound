import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardClickable, LatestNewsContainer } from "./elements";
import ViewNews from "./ViewNews";
import { useAuth } from "../../context/authContext";
import { showToastMessage } from "../../../utils/toastify";
import copy from "copy-to-clipboard";
import instance from "../../../utils/axiosInstance";

const LatestNews = ({ news, likeData = [], toggleLike }) => {
  const [currentNews, setCurrentNews] = useState(null);

  const [showNews, setShowNews] = useState(false);

  const handleClose = () => setShowNews(false);

  return (
    <LatestNewsContainer>
      {news.map((ele, i) => (
        <NewsCard
          news={ele}
          key={i}
          likeData={likeData}
          onCardClick={() => {
            setCurrentNews(ele);
            setShowNews(true);
          }}
          actualToggle={toggleLike}
        />
      ))}
      <Modal open={showNews} onClose={handleClose}>
        <ViewNews news={currentNews} likeData={likeData} close={handleClose} />
      </Modal>
    </LatestNewsContainer>
  );
};

const NewsCard = ({ news, onCardClick, likeData = [], actualToggle }) => {
  const dateObj = new Date(news.pubDate);
  const [incType, setIncType] = useState(likeData.includes(news._id));
  const [likeStatus, setLikeStatus] = useState(likeData.includes(news._id));

  const toggleLike = async () => {
    if (!user) {
      showToastMessage("Please login first", "error");
    } else {
      actualToggle(news._id);
      await instance.get(`/likes?likeId=${news._id}`);
    }
  };

  useEffect(() => {
    setLikeStatus(likeData.includes(news._id));
  }, [likeData]);

  const { user } = useAuth();

  const handleShare = () => {
    copy(news.link);
    showToastMessage("URL Copied to Clipboard", "success");
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 425,
        background: "#323437",
        marginBottom: "3rem",
        transition: "150ms ease-in-out",
        "&:hover": {
          transform: "scale(1.07)",
        },
      }}
    >
      <CardClickable onClick={() => onCardClick(news)}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          style={{ objectFit: "cover" }}
          image={news.image_url}
        />
        <CardContent style={{ paddingBottom: "7px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ lineHeight: "0.98", fontWeight: "500" }}
            color="#d3d2c7"
          >
            {news.title}
          </Typography>
          <div style={{ paddingTop: "12px", color: "#d3d2c7" }}>
            {news?.description.length > 80
              ? news?.description?.substring(0, 80) + "..."
              : news.description}
          </div>
        </CardContent>
      </CardClickable>
      <CardActions>
        <IconButton onClick={toggleLike}>
          <FavoriteIcon
            style={{
              color: likeStatus ? "#af1616" : "#d3d2c7",
            }}
          />
        </IconButton>
        <span style={{ color: "white" }}>
          {news.like_count +
            (incType ? (likeStatus ? 0 : -1) : likeStatus ? 1 : 0)}
        </span>
        <IconButton onClick={handleShare}>
          <ShareIcon style={{ color: "#d3d2c7" }} />
        </IconButton>
        <Chip
          label={news.category[0]}
          style={{ color: "white", background: "black" }}
        />
        <Chip
          label={dateObj.toLocaleDateString()}
          style={{ color: "white", background: "black" }}
        />
      </CardActions>
    </Card>
  );
};

export default LatestNews;
