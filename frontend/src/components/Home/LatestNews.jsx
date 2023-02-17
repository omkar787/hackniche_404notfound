import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const LatestNews = () => {
  return (
    <div style={{ width: "100%", padding: "0px 40px" }}>
      <NewsCard />
    </div>
  );
};

const NewsCard = () => {
  return (
    <Card sx={{ maxWidth: 345, height: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        style={{ objectFit: "cover" }}
        image="/assets/city.jfif"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default LatestNews;
