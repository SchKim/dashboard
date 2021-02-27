import styled from 'styled-components';
import backgroundImg from './shared/assets/backgroundImg.jpg';

import MenuComponent from './components/MenuComponent';

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: center / cover no-repeat;
  z-index: -1;
  height: calc(auto - 90px);
`;

function App() {
  return (
    <div className='App'>
      <BackgroundImg
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></BackgroundImg>

      <MenuComponent />
    </div>
  );
}

export default App;
