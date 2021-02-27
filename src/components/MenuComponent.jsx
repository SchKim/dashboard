import React from 'react';
import styled from 'styled-components';
import karakter_img from '../shared/assets/pic_nicolet.jpg';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Menu = styled.nav`
  height: 90px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background: #f97970;
    padding: 15px 0;
    place-items: center center;
  }

  li {
    list-style-type: none;
  }
  /* li::content::first-letter {
    color: #f97970;
    font-size: 30px;
  } */
  li:hover::after {
    content: 'Karakter';
    position: absolute;
    top: -125px;
    left: 7%;
    padding: 10px;
    border-radius: 50px;
    font: oblique small-caps bold 30px/21px Georgia, serif;
    background: #fff;
  }
  li:nth-child(2):hover::after {
    content: 'Knowledge Book';
    top: -125px;
    left: 27%;
  }
  li:nth-child(3):hover::after {
    content: 'Achievements';
    top: -125px;
    left: 47%;
  }
  li:nth-child(4):hover::after {
    content: 'Quests';
    top: -125px;
    left: 67%;
  }
  li:nth-child(5):hover::after {
    content: 'History';
    top: -125px;
    left: 87%;
  }

  li:first-child {
    border-bottom: 5px solid #02132c;
  }

  .menu__lastitem {
    grid-column-end: -1;
  }
  li a > i {
    font-size: 45px;
    color: #fbefd7;
    width: 100%;
  }
  li a > i:hover {
    color: #02132c;
  }

  li a:focus > i {
    color: #02132c;
  }
`;

// kakrkater

const KarakterWrapper = styled.div`
  background: #fff;
  border-radius: 50px;
  padding: 30px;
  margin: 30px 0 0 0;
  max-width: 1000px;
  width: 80%;
  margin: 0 10%;
`;

const KarakterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const ImgWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const ContentText = styled.div`
  min-width: 350px;
  margin: 30% 0 0 10%;

  p > span {
    text-transform: uppercase;
    font: 26px/ 35px bold;
    display: block;
  }
  p > span::first-letter {
    color: #f97970;
    font-size: 35px;
  }
`;

const KarakterTable = styled.div`
  margin: 30px 0 0 0;
  display: flex;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  background: #f97970;
  color: #02132c;
  text-transform: uppercase;
  padding: 5% 8%;
  height: 20vh;
  width: 70vw;

  .table__row {
    grid-row: 1;
  }
  .table__column {
    grid-column: 2;
    grid-row: 1;
  }

  .row__items {
    display: grid;
    grid-template-rows: repeat(11, 25px);
    margin: 5px 0;
  }

  .column__items {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
  }

  [class*='bar'] {
    border-radius: 50px;
    background-color: #fff;
    margin: 5px 0;
    text-align: end;
  }
  .bar1 {
    grid-column: 1 /9;
  }
  .bar2 {
    grid-column: 1;
  }
  .bar3 {
    grid-column: 1/ 5;
  }
`;

export default function MenuComponent() {
  return (
    <Router>
      <Menu>
        <ul>
          <li style={{ display: 'none' }}>
             <Link to='/'></Link>
          </li>
          <li>
             
            <Link to='/karaktercomponent'>
              <i className='fa fa-female'> </i>
            </Link>
          </li>
          <li>
            <Link to='/knowledgecomponent'>
               <i className='fa fa-graduation-cap'></i>
            </Link>
          </li>
          <li>
            <Link to='/achievementscomponent'>
               <i className='fa fa-trophy'></i>
            </Link>
          </li>
          <li>
            <Link to='/questscomponent'>
               <i className='fa fa-question'></i>
            </Link>
          </li>
          <li className='menu__last-item'>
            <Link to='/historycomponent'>
               <i className='fa fa-history'></i>
            </Link>
          </li>
        </ul>
      </Menu>
      <Switch>
        <Route path='/karaktercomponent'>
          <Karaktercomponent />;
        </Route>

        <Route path='/knowledgecomponent'>
          <Knowledgecomponent />;
        </Route>
        <Route path='/achievementscomponent'>
          <Achievementscomponent />
        </Route>
        <Route path='/questscomponent'>
          <Questscomponent />
        </Route>
        <Route path='/historycomponent'>
          <Historycomponent />
        </Route>
      </Switch>
    </Router>
  );
}

function Karaktercomponent() {
  return (
    <KarakterWrapper>
      <KarakterContent>
        <ImgWrapper>
          <img src={karakter_img} alt='foto_kim' />
        </ImgWrapper>

        <ContentText>
          <p>
            <span>Kim Schenk</span>
            <span>Frontend Developer</span>
            <span>FIOD</span>
          </p>
        </ContentText>
      </KarakterContent>

      <KarakterTable>
        <Table>
          <div className='table__row'>
            <div className='row__items'>
              <div>skills</div>
              <div>kim</div>
              <div>html</div>
              <div>css</div>
              <div>javascript</div>
              <div>typeschript</div>
            </div>
          </div>

          <div className='table__column'>
            <div className='column__items'>
              <div>0%</div>
              <div>25%</div>
              <div>50%</div>
              <div>75%</div>
              <div>100%</div>
              <div>125%</div>
              <div>150%</div>
              <div>175%</div>
              <div>200%</div>

              <div className='bar1'>200%</div>
              <div className='bar2'>25%</div>
              <div className='bar3'>100%</div>
            </div>
          </div>
        </Table>
      </KarakterTable>
    </KarakterWrapper>
  );
}

function Knowledgecomponent() {
  return <h2>KnowledgeComponent</h2>;
}
function Achievementscomponent() {
  return <h2>AchievementsComponent</h2>;
}
function Questscomponent() {
  return <h2>QuestsComponent</h2>;
}
function Historycomponent() {
  return <h2>HistoryComponent</h2>;
}
