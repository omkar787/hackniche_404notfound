import React, { useEffect, useState } from "react";
import { Autocomplete, InputAdornment, TextField, Modal } from "@mui/material";
import {
  MidContainer,
  MidElement,
  MidHeading,
  MidSubHeading,
  SearchSuggestion,
  SearchSuggestionContainer,
  StyledText,
} from "./elements";
import Searchbar from "./SearchBar";
import instance from "../../../utils/axiosInstance";
import { showToastMessage } from "../../../utils/toastify";
import { ToastContainer } from "react-toastify";
import ViewNews from "./ViewNews";

const Middle = () => {
  const [query, setQuery] = useState("");
  const [expand, setExpad] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const [currentNews, setCurrentNews] = useState(null);
  const [showNews, setShowNews] = useState(false);

  const handleClose = () => setShowNews(false);

  useEffect(() => {
    if (!query) return;

    const fetchNews = async () => {
      try {
        const res = await instance.get(`/news/match-text/${query}`);
        const { data } = res;
        const suggests = data.data.data.map((data) => data);
        console.log(suggests);
        setSuggestions(suggests);
      } catch (error) {
        console.log(error);
        showToastMessage(error.response.data.message, "error", 2000);
      }
    };

    const timer = setTimeout(() => {
      fetchNews();
    }, 2000);

    return () => clearTimeout(timer);
  }, [query]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <MidContainer>
      <MidElement style={{ padding: "42px", background: "#222" }}>
        <MidHeading>Discover new world news and follow developments</MidHeading>
        <MidSubHeading>
          Follow latest developments in the world. Don't fall behind.
          <br /> Know what's happening{" "}
        </MidSubHeading>
        <ToastContainer />
        <MidElement style={{ position: "relative" }}>
          <Searchbar
            style={{
              width: !expand ? "70%" : "90%",
              zIndex: "120",
              marginTop: "20px",
            }}
            placeholder="Search news..."
            queryValue={query}
            handleFocus={() => setExpad(true)}
            handleBlur={() => setTimeout(() => setExpad(false), 500)}
            // handleBlur={() => setExpad(false)}
            handleQueryChange={handleQueryChange}
          />
          {expand && (
            <SearchSuggestionContainer>
              {suggestions.length === 0 ? (
                <SearchSuggestion> No Result Found</SearchSuggestion>
              ) : (
                suggestions.map((element, index) => (
                  <SearchSuggestion
                    key={element._id}
                    onClick={() => {
                      console.log(element);
                      setCurrentNews(element);
                      setShowNews(true);
                    }}
                  >
                    {element.title}
                  </SearchSuggestion>
                ))
              )}
            </SearchSuggestionContainer>
          )}
          <Modal open={showNews} onClose={handleClose}>
            <ViewNews news={currentNews} close={handleClose} />
          </Modal>
        </MidElement>
      </MidElement>
      <MidElement style={{ position: "relative" }}>
        <img src={"/assets/city.jfif"} style={{ width: "600px" }} alt="city" />
        <StyledText>Get the Latest News !</StyledText>
      </MidElement>
    </MidContainer>
  );
};

export default Middle;
