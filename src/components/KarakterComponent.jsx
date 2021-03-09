import React from "react";
import styled from "styled-components";
import karakterImg from "../shared/assets/pic_nicolet.jpg";

const KarakterWrapper = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
  background: #fff;
  border-radius: 50px;
  padding: 30px;
  margin: 30px 0 0 0;
  max-width: 1000px;
  width: 50%;

  @media only screen and (max-width: 900px) {
    width: 70%;
    left: 7%;

    top: 20px;
  }
`;

const KarakterHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const KarakterAvatar = styled.div`
  img {
    width: 100%;
  }
  @media only screen and (max-width: 1100px) {
    visibility: hidden;
  }
`;

const KarakterHeadline = styled.div`
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
const KarakterDataTilte = styled.dt`
  text-transform: uppercase;
  font: 26px/ 35px bold;
  display: block;
`;
const KarakterDataData = styled.dd`
  text-transform: uppercase;
  font: 26px/ 35px bold;
  display: block;
  margin: 0;
`;

const KarakterTable = styled.div`
  margin: 30px 0 0 0;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  background: #f97970;
  color: #02132c;
  text-transform: uppercase;
  padding: 5% 8%;
  height: 30vh;
  /* width: 60vw; */

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

  [class*="bar"] {
    border-radius: 50px;
    background-color: #fff;
    margin: 5px 0;
    text-align: end;
    font-size: 10px;
    line-height: 17px;
    padding-right: 2px;
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
  /* bar componet voor lles  */

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

export default function Karaktercomponent() {
  return (
    <KarakterWrapper>
      <KarakterHeader>
        <KarakterAvatar>
          <img src={karakterImg} alt="foto van Kim" />
        </KarakterAvatar>
        <KarakterHeadline>
          <dl>
            <KarakterDataTilte>Kim Schenk</KarakterDataTilte>
            <KarakterDataData>Frontend Developer @FIOD</KarakterDataData>
          </dl>
        </KarakterHeadline>
      </KarakterHeader>

      <KarakterTable>
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
              <div>25%</div>
              <div>50%</div>
              <div>75%</div>
              <div>100%</div>
              <div>125%</div>
              <div>150%</div>
              <div>175%</div>
              <div>200%</div>

              <div className="bar1">200%</div>
              <div className="bar2">25%</div>
              <div className="bar3">100%</div>
            </div>
          </div>
        </Table>
      </KarakterTable>
    </KarakterWrapper>
  );
}
