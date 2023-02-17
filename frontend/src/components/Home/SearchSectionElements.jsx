import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const GradientContainer = styled.section`
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(191, 200, 241, 0.408) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    background: white;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5rem;
  margin-top: 1rem;

  @media (max-width: 800px) {
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 1.5rem;
  }
`;
export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1.5rem;
  padding-left: 2rem;
  flex-grow: 0;
  flex-shrink: 0;
  width: 46%;

  @media (max-width: 800px) {
    width: 94%;
    align-items: center;
    padding: 0;
    margin: 0;
  }
`;

export const MainHeading = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 44px;
  font-weight: 600;
  font-family: Outfit;
  letter-spacing: -1px;
  & > span {
    color: rgba(29, 161, 242, 1);
  }

  /* line-height: 100px; */

  @media (max-width: 1270px) {
    font-size: 42px;
  }
  @media (max-width: 800px) {
    font-weight: 700;
    font-size: 29px;
    text-align: center;
  }
`;

export const MainSubHeading = styled.h3`
  padding: 0;
  margin: 0;
  margin-top: 2rem;
  font-family: Outfit;
  font-size: 21px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.16px;
  color: rgba(78, 78, 78, 1);
  word-spacing: 1px;

  @media (max-width: 1270px) {
    font-size: 19.5px;
  }
  @media (max-width: 800px) {
    text-align: center;
    font-size: 16px;
    line-height: 120%;
    font-weight: 400;
    margin-top: 1.5rem;
  }
`;
export const MainImage = styled.img`
  width: max(290px, 28%);
  margin-left: 1rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

// * Chips
export const ChipsWrapper = styled.div`
  box-sizing: border-box;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.7rem;
  padding: 0 1rem;

  @media (max-width: 1270px) {
    width: 58%;
  }
  @media (max-width: 870px) {
    width: 78%;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Chip = styled(Button)`
  background-color: rgba(66, 133, 244, 1);
  color: white;
  font-family: Outfit;
  border-radius: 30px;
  min-height: 0;
  min-width: 0;
  padding: 0;
  text-transform: none;
  font-weight: 400;
  padding: 0.1rem 0.9rem;
  margin-top: 10px;
  margin-right: 10px;

  &:hover {
    background-color: rgb(57 123 233);
  }
  @media (max-width: 800px) {
    font-size: 11px;
    font-weight: 400;
  }
`;

// * Search Bar styling

export const SearchbarContainer = styled.form`
  width: 80%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.14), 0 0 8px #aaa;
  background-color: white;
  border-radius: 8px;
  display: flex;
  transition: 250ms ease;

  @media (max-width: 1270px) {
    width: 58%;
  }
  @media (max-width: 870px) {
    width: 78%;
  }
  @media (max-width: 870px) {
    width: 90%;
  }
`;

export const SearchInput = styled.input`
  font-size: 18px;
  font-family: Outfit;
  font-weight: 400;
  outline: none;
  margin: 10px 0 10px 1.5rem;
  flex-grow: 1;
  border: none;

  @media (max-width: 800px) {
    font-size: 12px;
    margin-left: 0.9rem;
    font-weight: 400;
    letter-spacing: -0.16px;
  }
`;
export const SearchButton = styled(Button)`
  background-color: #4285f4;
  padding: 0 0.5rem;
  min-width: 0;
  border-radius: 8px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  & > svg {
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    background-color: rgba(18, 102, 241, 1);
    padding: 0 0.7rem;

    & > svg {
      font-size: 1.2rem;
    }
  }
`;
