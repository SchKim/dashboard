import styled from "styled-components";

import backgroundImg from "./shared/assets/backgroundImg.jpg";
import MenuComponent from "./components/MenuComponent";

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: calc(100vh + -84px);
`;

const CoverBackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <ContentWrapper>
      <CoverBackgroundImage src={backgroundImg}></CoverBackgroundImage>
      <MenuComponent />
    </ContentWrapper>
  );
}

export default App;
