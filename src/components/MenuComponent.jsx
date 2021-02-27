import React from 'react';
import styled from 'styled-components';
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
  return <h2>yes</h2>;
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
