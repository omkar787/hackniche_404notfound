import styled from "styled-components";
// gradient color top left  #8432e5
// gradient color bot right #5963e9
// text color #d7d2e3

export const Card = styled.div`
  display: flex;
  align-items: flex-end;
  height: max(100vh, 500px);
  width: 100%;
  padding-top: 70px;
  background: ${(props) =>
    props.background || "linear-gradient(#8432a5, #5963e9)"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  object-fit: contain;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
`;

export const CardBody = styled.div`
  width: calc(100% - max(50%, 420px));
  height: 100%;
  padding: 3rem 10px 3rem 4rem;

  @media (max-width: 1100px) {
    padding-bottom: 0;
    width: 100%;
    height: unset;
    align-self: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 875px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1.5rem 10px;
  }
`;

export const MyImage = styled.img`
  width: max(50%, 600px);
  @media (max-width: 875px) {
    width: 100%;
  }
`;

export const StyledHeading = styled.span`
  font-size: 4.5rem;
  font-family: "Roboto";
  color: #d7d2e3;
  text-shadow: -4px 5px black;
  -webkit-text-stroke: 3px black;
  text-transform: uppercase;
  text-align: left;
  font-weight: 900;
  user-select: none;
  line-height: 1.1;
  letter-spacing: 3px;
  white-space: nowrap;

  @media (max-width: 1200px) {
    font-size: 3.8rem;
  }
  @media (max-width: 900px) {
    font-size: 3.4rem;
    letter-spacing: 1px;
  }
  @media (max-width: 660px) {
    font-size: 3.2rem;
    margin-left: 10%;
    white-space: normal;
    text-align: left;
  }
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 1.7rem;
  text-shadow: 0 0 3px #5963e9;
  line-height: 1.45;
  margin: 30px 0;
  @media (max-width: 1200px) {
    font-size: 1.4rem;
  }
  @media (max-width: 660px) {
    font-size: 1.2rem;
    margin-left: 10%;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.7rem;
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const StoreHeading = styled.h4`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 900;
`;

export const TextWrapper = styled.div`
  position: absolute;
  padding: 40px 70px;
`;

export const SlideHeading = styled.h3`
  font-size: 60px;
  color: white;
  text-shadow: 1px 1px 8px black, 0px 0px 18px black;
  width: max(70%, 300px);
`;
export const SlideDescription = styled.h3`
  font-size: 24px;
  color: white;
  font-weight: 300;
  text-shadow: 1px 1px 8px black, 0px 0px 12px black;
  width: max(70%, 300px);
`;
