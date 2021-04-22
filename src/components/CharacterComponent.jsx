import React from "react";
import styled from "styled-components";

import CharacterImg from "../shared/assets/fotoKim.jpeg";

function getProgressInColumns(percentage) {
  // 200 delen door 10 is 0.5 welke moet afgerond worden naar boven voor een heel getal
  let total = percentage / 10;
  //console.log(total);
  total = Math.round(total);
  // if (total <= 0.5) {
  //   Math.ceil("ceil" + total);
  //   console.log(total);
  // } else {
  //   Math.floor(total);
  //   console.log("floor" + total);
  // }

  // console.log("uitkomst" + total);
  return total + 2;

  // de +2 is om het grid in juiste positie te zetten default start 1, 10% = 1 + 2 tikt die tegen het 3de grid aan
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

  .column__items {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    margin: 5px 0;
  }

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 100px 1fr;
  }
  @media only screen and (max-width: 900px) {
    font-size: 8px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 8px;
  }
`;
const RowItems = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, 25px);

  @media only screen and (max-width: 900px) {
    /* grid-template-rows: repeat(6, 25px); */
    line-height: 10px;
  }
`;
const RowItem = styled.div`
  margin: 6px 0 0 0;
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
  @media only screen and (max-width: 900px) {
    line-height: 12px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 8px;
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
            <RowItems>
              <RowItem>skills</RowItem>
              <RowItem>kim</RowItem>
              <RowItem>html</RowItem>
              <RowItem>css</RowItem>
              <RowItem>javascript</RowItem>
              <RowItem>typescript</RowItem>
            </RowItems>
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
              <Bar scoreBar={55} />
              <Bar scoreBar={20} />
              <Bar scoreBar={10} />
            </div>
          </div>
        </Table>
      </CharacterTable>
    </CharacterWrapper>
  );
}
