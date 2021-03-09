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
              <Tooltip>Karakter</Tooltip>
            </Link>
          </li>
          <li>
            <Link to="/knowledge">
               <i className="fa fa-graduation-cap"></i>
              <Tooltip>Knowledge Book</Tooltip>
            </Link>
          </li>
          <li>
            <Link to="/achievement">
               <i className="fa fa-trophy"></i>
              <Tooltip>Achievements</Tooltip>
            </Link>
          </li>
          <li>
            <Link to="/quests">
               <i className="fa fa-question"></i>
              <Tooltip>Quests</Tooltip>
            </Link>
          </li>
          <li className="menu__last-item">
            <Link to="/history">
              <i className="fa fa-history"></i>
              <Tooltip>History</Tooltip>
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
  background: #f97970;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: end center;
    padding-inline-start: 0px;
    position: relative;
  }
  li {
    list-style-type: none;
  }
  ul li a {
    color: #f97970;
    font-size: 24px;
  }

  li a > i {
    font-size: 45px;

    color: #fbefd7;
    width: 100%;
    max-height: 100%;
  }
  li a:focus > i,
  ul li a:hover i,
  ul li i:hover {
    color: #02132c;
  }
  .menu__lastitem {
    grid-column-end: -1;
  }
  ul li a:hover div {
    display: block;
  }
`;
const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  background: #fff;
  padding: 10px;
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 3px;
  font-weight: bold;
  display: none;
  transform: translate(-40%, -100%);
`;
