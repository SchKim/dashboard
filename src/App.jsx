import styled from "styled-components";
import backgroundImg from "./shared/assets/backgroundImg.jpg";

import MenuComponent from "./components/MenuComponent";

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 90px;
`;

const Cover = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <ContentWrapper>
      <Cover src={backgroundImg}></Cover>

      <MenuComponent />
    </ContentWrapper>
  );
}

export default App;
