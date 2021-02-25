import React from 'react';
import styled from 'styled-components';
import karakter_img from '../shared/assets/pic_nicolet.jpg';

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

export default function KarakterComponent() {
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
