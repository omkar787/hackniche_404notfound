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
import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardClickable, LatestNewsContainer } from "./elements";
import ViewNews from "./ViewNews";

const LatestNews = ({news}) => {
  const [currentNews, setCurrentNews] = useState(null);
  const [showNews, setShowNews] = useState(false);

  const handleClose = () => setShowNews(false);

  return (
    <LatestNewsContainer>
      {news.map((ele, i) => (
        <NewsCard
          news={ele}
          key={i}
          onCardClick={() => {
            console.log(ele);
            setCurrentNews(ele);
            setShowNews(true);
          }}
        />
      ))}
      <Modal open={showNews} onClose={handleClose}>
        <ViewNews news={currentNews} close={handleClose} />
      </Modal>
    </LatestNewsContainer>
  );
};

const NewsCard = ({ news, onCardClick }) => {
  const dateObj = new Date(news.pubDate);
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  const onClick = (newsItem) => {
    setCurrentNews(newsItem);
    setShowNews(true);
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
          <FavoriteIcon style={{ color: liked ? "#af1616" : "#d3d2c7" }} />
        </IconButton>
        <span style={{ color: "white" }}>{2}</span>
        <IconButton>
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

const test = {
  title:
    "Greggs to open new bakery in Peterborough shopping centre later this year",
  link: "https://www.cambridge-news.co.uk/whats-on/food-drink-news/greggs-open-new-bakery-peterborough-26254792",
  keywords: ["What's On"],
  creator: ["newsdesk@cambridge-news.co.uk (Amy Jones)"],
  video_url: null,
  description:
    "This will be the seventh Greggs to open in Peterborough. Just last year the bakery chain opened a new store at the Bretton Centre",
  content:
    'The new Greggs will open at Serpentine Green in Peterborough (Image: Cambridge News) Group 28 Sign up to our dedicated Peterborough newsletter for the latest news direct to your inbox each day Invalid email Something went wrong, please try again later. Sign Up No thanks, close We use your sign-up to provide content in the ways you\'ve consented to and improve our understanding of you. This means that we may include adverts from us and third parties based on our knowledge of you. We also may change the frequency you receive our emails from us in order to keep you up to date and give you the best relevant information possible. As always you can unsubscribe at any time. More info Group 28 Thank you for subscribing! We have more newsletters Show Me No thanks, close See our Privacy Notice Greggs will open a new store in Peterborough later this year. The bakery chain said it was unable to share details "at the moment" but said more information would be shared "in the coming months". The takeaway sausage roll giant has secured a spot at the Serpentine Green shopping centre and will open later this year. The Greggs store will open where Thomas Cook previously was, which is next to Costa and near the Tesco Extra and M&S entrance. An opening date is yet to be announced but Greggs said more information will be shared in the next few months. This will be the seventh Greggs in and around the city of Peterborough. Read more: New hotel with rooftop bar to finally open in Peterborough this summer after construction delays A Greggs spokesperson said: “Greggs is due to open a new shop in Peterborough later this year. While we are unable to share any details at the moment, we will be sure to share further information in the coming months.” Currently at the future store, posters have been put up advertising the new Greggs with a tease of "coming soon" alongside a picture of a mouthwatering doughnut. Bosses are also looking for people to become a part of the "Greggs family" adding: "There\'s never been a more exciting time to join." The new store is looking for people to join the \'Greggs family\' (Image: Cambridge News) Some of the items expected to be on offer include favourites such as sausage rolls, bakes, pastries, breakfast baps, doughnuts as well as hot and cold drinks. It is yet to be confirmed if the new Greggs at Serpentine will offer dine-in or Click + Collect orders via the Greggs App. The bakery chain has six other stores located in and around the city centre. This includes Bretton Centre, Bridge Street, Long Causeway, Fletton Quays, Queensgate and Ortongate. Keep up to date with the latest Peterborough news with our free weekly email - find out more here. READ NEXT: Look inside new Little Petra - relocated Cambridge Middle Eastern restaurant The Indian street food festival coming to Cambs for the first time next month Thai restaurant in Cambs could be named \'Britain\'s best takeaway\' in Just Eat awards I tried Knoops in Cambridge,the café that specialises in hot chocolate, and the menu left me overwhelmed Popular Ely café and deli The Lemon Tree put up for sale as owners set to retire Story Saved You can find this story in My Bookmarks. Or by navigating to the user icon in the top right. Follow CambridgeLive Facebook Twitter Comment More On Peterborough Cambridgeshire',
  pubDate: "2023-02-17 12:01:33",
  image_url:
    "https://i2-prod.cambridge-news.co.uk/incoming/article26255104.ece/ALTERNATES/s615/0_Peterborough-Greggs-Serpentine-Green.jpg",
  source_id: "cambridgenews",
  category: ["environment", "food", "entertainment"],
  country: ["united kingdom"],
  language: "english",
};

const lotsOfDocs = [
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
];

export default LatestNews;
