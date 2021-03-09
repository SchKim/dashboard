import React from "react";

import KarakterComponent from "./KarakterComponent";
import KnowledgeComponent from "./KnowledgeComponent";
import AchievementsComponent from "./AchievementsComponent";
import QuestsComponent from "./QuestsComponent";
import HistoryComponent from "./HistoryComponent";

import styled from "styled-components";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function MenuComponent() {
  return (
    <Router>
      <Menu>
        <ul>
          <li>
            <Link to="/karakter">
              <i className="fa fa-female"></i>
            </Link>
          </li>
          <li>
            <Link to="/knowledge">
               <i className="fa fa-graduation-cap"></i>
            </Link>
          </li>
          <li>
            <Link to="/achievement">
               <i className="fa fa-trophy"></i>
            </Link>
          </li>
          <li>
            <Link to="/quests">
               <i className="fa fa-question"></i>
            </Link>
          </li>
          <li className="menu__last-item">
            <Link to="/history">
              {/* a relatif aan zn parent maken  */} 
              <i className="fa fa-history"></i>
            </Link>
          </li>
        </ul>
      </Menu>
      <Route path="/karakter" component={KarakterComponent} />
      <Route path="/knowledge" component={KnowledgeComponent} />
      <Route path="/achievement" component={AchievementsComponent} />
      <Route path="/quests" component={QuestsComponent} />
      <Route path="/history" component={HistoryComponent} />
    </Router>
  );
}

const Menu = styled.nav`
  /* height: 90px; */
  background: #f97970;
  position: absolute;
    left:0;
    bottom:0;
    right:0;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* padding: 15px 0; */
    place-items: center center;
   
  }

  li {
    list-style-type: none;
    /* text-align:center;
    margin-bottom:5px */
  }

  /* li:hover::after {
    position: absolute;
    top: -125px;
    left: 7%;
    padding: 10px;
    border-radius: 50px;
    font: oblique small-caps bold 30px/21px Georgia, serif;
    background: #fff;
  }
  li:nth-child(2):hover::after {
    content: "Karakter";
    top: -75px;
    left: 5%;
  }
  li:nth-child(3):hover::after {
    content: "Knowledge Book";
    top: -75px;
    left: 25%;
  }
  li:nth-child(4):hover::after {
    content: "Achievements";
    top: -75px;
    left: 45%;
  }
  li:nth-child(5):hover::after {
    content: "Quests";
    top: -75px;
    left: 65%;
  }
  li:nth-child(6):hover::after {
    content: "History";
    top: -75px;
    left: 85%; */

    /* @media only screen and (max-width: 900px) {
      left: 81%;
    }
    @media only screen and (max-width: 600px) {
      left: 73%;
    } */
  }

  /* top en lest weg werken met relastive aan parent  */

 /* op de hover display no  */

  .menu__lastitem {
    grid-column-end: -1;
  }
  li a > i {
    font-size: 45px;
    line-height:45px;
    color: #fbefd7;
    width: 100%;
  }
  li a > i:hover, li a:focus > i {
    color: #02132c;
  }

 
`;
