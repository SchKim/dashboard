// import styled, { css } from "styled-components";
import styled from "styled-components";

export const KnowledgeWrapper = styled.div`
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
export const KnowledgeDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const KnowledgeTitle = styled.h1`
  display: list-item;
  content: " ";

  ::marker {
    color: #f97970;
  }
`;

export const KnowledgeIcon = styled.i`
  font-size: 25px;
  padding: 3%;
  pointer-events: none;
  color: #f97970;
`;

export const KnowledgeTextWrapper = styled.div`
  max-width: 80%;
  padding: 10%;
`;
