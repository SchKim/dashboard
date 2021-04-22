import styled from "styled-components";

import backgroundImg from "./shared/assets/backgroundImg.jpg";
import MenuComponent from "./components/MenuComponent";

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: calc(100vh + -104px);
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

// positoin absolute eraf bij menu XX
// menu in grid XX
// niet resolve xx
// andere range voor 200
// transfom => 50 word 40 omdat ik ook gebruik maak van padding in de plus en hoogte heb ik wel bottom in de plus en transform in de min
