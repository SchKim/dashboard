import React from 'react';
import styled from 'styled-components';
import karakter_img from '../shared/assets/pic_nicolet.jpg';

const KarakterWrapper = styled.div`
  background: #fff;
  border-radius: 50px;
  padding: 30px;
  margin: 30px 0 0 0;
  max-width: 1000px;
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

export default function KarakterComponent() {
  return (
    <KarakterWrapper>
      <KarakterContent>
        <ImgWrapper>
          <img src={karakter_img} alt='foto_kim' />
        </ImgWrapper>

        <div class='content__text'>
          <p>
            <span>Kim Schenk</span>
            <span>Frontend Developer</span>
            <span>FIOD</span>
          </p>
        </div>
      </KarakterContent>

      <div class='karakter__table'>
        <div class='table'>
          <div class='table__row'>
            <div class='row__items'>
              <div>skills</div>
              <div>kim</div>
              <div>html</div>
              <div>css</div>
              <div>javascript</div>
              <div>typeschript</div>
            </div>
          </div>

          <div class='table__column'>
            <div class='column__items'>
              <div>0%</div>
              <div>25%</div>
              <div>50%</div>
              <div>75%</div>
              <div>100%</div>
              <div>125%</div>
              <div>150%</div>
              <div>175%</div>
              <div>200%</div>

              <div class='bar1'>200%</div>
              <div class='bar2'>25%</div>
              <div class='bar3'>100%</div>
            </div>
          </div>
        </div>
      </div>
    </KarakterWrapper>
  );
}
