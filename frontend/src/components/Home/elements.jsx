import styled from "styled-components";

export const MidContainer = styled.div`
  width: 100%;
  padding: 12px 20px;
  padding-top: 42px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: max(90%, 400px);
  grid-gap: 34px;
  margin: auto;
`;

export const MidHeading = styled.h3`
  color: white;
  font-size: 30px;
  font-weight: 700;
`;

export const MidSubHeading = styled.h4`
  color: #ddd;
  font-size: 20px;
  font-weight: 400;
  padding: 22px 0;
`;

export const MidElement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchSuggestionContainer = styled.div`
  position: absolute;
  top: 105%;
  background-color: #fff;
  width: 83%;
  box-shadow: 0 0 2px gray, 0 0 8px gray;
  display: flex;
  flex-direction: column;
`;

export const SearchSuggestion = styled.div`
  padding: 10px 20px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

export const StyledText = styled.h4`
  font-size: 38px;
  position: absolute;
  bottom: 0px;
  color: white;
  text-shadow: 2px 2px black;
  padding: 12px 40px;
`;

export const CenterSeparator = styled.div`
  width: 100%;
  text-align: center;
  text-decoration: underline;
  font-size: 30px;
  font-weight: 600;
  margin-top: 46px;
  margin-bottom: 18px;
  color: white;
`;

export const LatestNewsContainer = styled.div`
  padding: 0px 70px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
  align-items: center;
`;

export const CardClickable = styled.div`
  margin: 0px;
  cursor: pointer;
`;

export const VNContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max(62%, 400px);
  height: 80vh;
  background: rgb(50 52 55);
  border-radius: 12px;
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  /* padding: 22px 34px; */
`;
export const VNImg = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  object-fit: cover;
`;

export const VNContent = styled.div`
  flex-grow: 1;
  overflow: auto;
  height: 300px;
  padding: 12px 18px;
  color: white;
  box-shadow: inset 0px 2px #555, inset 0px -2px #444;
`;
