import React, { useState } from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
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

const Middle = () => {
  const [query, setQuery] = useState("");
  const [expand, setExpad] = useState(false);
  const [auto, setAuto] = useState([
    {
      title: "Hello how",
    },
    {
      title: "Hey hey",
    },
  ]);

  return (
    <MidContainer>
      <MidElement style={{ padding: "42px", background: "#222" }}>
        <MidHeading>Discover new world news and follow developments</MidHeading>
        <MidSubHeading>
          Follow latest developments in the world. Don't fall behind.
          <br /> Know what's happening{" "}
        </MidSubHeading>
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
            handleBlur={() => setExpad(false)}
            handleQueryChange={(e) => setQuery(e.target.value)}
          />
          {expand && (
            <SearchSuggestionContainer>
              {auto.length === 0 ? (
                <SearchSuggestion> No Result Found</SearchSuggestion>
              ) : (
                auto.map((e) => <SearchSuggestion>{e.title}</SearchSuggestion>)
              )}
            </SearchSuggestionContainer>
          )}
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
