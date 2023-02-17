import React from "react";
import {
  SearchbarContainer,
  SearchButton,
  SearchInput,
} from "./SearchSectionElements";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = ({
  placeholder = "",
  handleQueryChange = () => {},
  handleQuerySubmit = () => {},
  handleFocus = () => {},
  handleBlur = () => {},
  queryValue = "",
  ...others
}) => {
  const submit = (e) => {
    e.preventDefault();
    submit();
  };
  return (
    <SearchbarContainer onSubmit={handleQuerySubmit} {...others}>
      <SearchInput
        value={queryValue}
        onChange={handleQueryChange}
        type="input"
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <SearchButton type="submit" onClick={submit} variant="contained">
        <SearchIcon />
      </SearchButton>
    </SearchbarContainer>
  );
};

export default Searchbar;
