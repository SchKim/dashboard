import React from "react";
import styled from "styled-components";


const Menu = styled.div`
height:99px;
position: absolute;
bottom: 0;
left:0;
right:0;

ul{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    background: #f97970;
    padding: 15px 0;
    place-items: center center;
}

li{
list-style-type:none;
}
`;

export default function MenuComponent(){
    return (
        <Menu>
      <nav>
          <ul>
              <li>  
              <i
                className="fa fa-female"></i>
            </li>
            <li>  
              <i
                className="fa fa-graduation-cap"></i>
            </li>
            <li>  
              <i
                className="fa fa-trophy"></i>
            </li>
            <li>  
              <i
                className="fa fa-question"></i>
            </li>
            <li>  
              <i
                className="fa fa-history"></i>
            </li>

          </ul>
          
      </nav>
      </Menu>
    )
}