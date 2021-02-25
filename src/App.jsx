import './App.css';
import styled from 'styled-components';
import backgroundImg from './shared/assets/backgroundImg.jpg';

import MenuComponent from './components/MenuComponent';

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background: url('http://www.baltana.com/files/wallpapers-16/Digital-Art-Background-HD-Wallpapers-41706.jpg') */
  /* center / cover no-repeat; */
  z-index: -1;
`;

function App() {
  return (
    <div className='App'>
      <BackgroundImg src={backgroundImg}></BackgroundImg>
      <MenuComponent />
    </div>
  );
}

export default App;
