import React from "react";
import styled from "styled-components";

import CharacterImg from "../shared/assets/fotoKim.jpeg";

function getProgressInColumns(percentage) {
  return 2 + percentage / 10;
  // de + 1 is nodig om de de grid onder het juiste percetage te zetten anders tikt die er tegen aan
}

const CharacterWrapper = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
  background: #fff;
  border-radius: 50px;
  padding: 30px;
  margin: 30px 0 0 0;
  max-width: 1000px;
  width: 50%;

  @media only screen and (max-width: 1600px) {
    width: 90%;
  }

  @media only screen and (max-width: 900px) {
    width: 70%;
    left: 7%;
    top: 20px;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    left: 0;
  }
`;

const CharacterHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const CharacterAvatar = styled.div`
  img {
    width: 100%;
  }
  @media only screen and (max-width: 1100px) {
    visibility: hidden;
  }
`;

const CharacterHeadline = styled.div`
  min-width: 350px;
  margin: 10% 0 0 10%;

  dt::first-letter,
  dd::first-letter {
    color: #f97970;
    font-size: 35px;
  }
  @media only screen and (max-width: 900px) {
    dt,
    dd {
      font-size: 20px;
    }
    @media only screen and (max-width: 500px) {
      dl {
        max-width: 200px;
      }
    }
  }
`;
const CharacterDataTitle = styled.dt`
  text-transform: uppercase;
  font: 26px/ 35px bold;
  display: block;
`;
const CharacterDataData = styled.dd`
  text-transform: uppercase;
  font: 26px/ 35px bold;
  display: block;
  margin: 0;
`;

const CharacterTable = styled.div`
  margin: 30px 0 0 0;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  background: #f97970;
  color: #02132c;
  text-transform: uppercase;
  padding: 5% 8%;

  .table__row {
    grid-row: 1;
  }
  .table__column {
    grid-column: 2;
    grid-row: 1;
  }

  .row__items {
    display: grid;
    grid-template-rows: repeat(auto-fill, 25px);
    margin: 6px 0 0 0;
  }

  .column__items {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    margin: 5px 0;
  }

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 50px 1fr;
    font-size: small;
  }
  @media only screen and (max-width: 900px) {
    font-size: 8px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 8px;
  }
`;
const Bar = styled.div`
  border-radius: 50px;
  background-color: #fff;
  margin: 5px 0;
  text-align: end;
  font-size: 10px;
  line-height: 17px;
  padding-right: 2px;
  grid-column-start: 1;
  grid-column-end: ${(props) => getProgressInColumns(props.scoreBar)};
  &:after {
    content: " ${(props) => props.scoreBar} %";
  }
`;

export default function Charactercomponent() {
  return (
    <CharacterWrapper>
      <CharacterHeader>
        <CharacterAvatar>
          <img src={CharacterImg} alt="foto van Kim" />
        </CharacterAvatar>
        <CharacterHeadline>
          <dl>
            <CharacterDataTitle>Kim Schenk</CharacterDataTitle>
            <CharacterDataData>Frontend Developer @FIOD</CharacterDataData>
          </dl>
        </CharacterHeadline>
      </CharacterHeader>

      <CharacterTable>
        <Table>
          <div className="table__row">
            <div className="row__items">
              <div>skills</div>
              <div>kim</div>
              <div>html</div>
              <div>css</div>
              <div>javascript</div>
              <div>typescript</div>
            </div>
          </div>

          <div className="table__column">
            <div className="column__items">
              <div>0%</div>
              <div>10%</div>
              <div>20%</div>
              <div>30%</div>
              <div>40%</div>
              <div>50%</div>
              <div>60%</div>
              <div>70%</div>
              <div>80%</div>
              <div>90%</div>
              <div>100%</div>
              <Bar scoreBar={100} />
              <Bar scoreBar={50} />
              <Bar scoreBar={20} />
              <Bar scoreBar={0} />
            </div>
          </div>
        </Table>
      </CharacterTable>
    </CharacterWrapper>
  );
}
