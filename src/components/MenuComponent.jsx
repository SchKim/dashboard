import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import KarakterComponent from './KarakterComponent';
import KnowledgeComponent from './KnowledgeComponent';
import AchievementsComponent from './AchievementsComponent';
import QuestsComponent from './QuestsComponent';
import HistoryComponent from './HistoryComponent';

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
      <Route path='/karaktercomponent' component={KarakterComponent} />

      <Route path='/knowledgecomponent' component={KnowledgeComponent} />
      <Route path='/achievementscomponent' component={AchievementsComponent} />
      <Route path='/questscomponent' component={QuestsComponent} />
      <Route path='/historycomponent' component={HistoryComponent} />
    </Router>
  );
}
