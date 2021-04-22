import React from "react";
import styled from "styled-components";
import CharacterJson from "../shared/api.json";

const KnowledgeWrapper = styled.div`
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
const KnowledgeDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const KnowledgeTitle = styled.h1`
  display: list-item;
  content: " ";

  ::marker {
    color: #f97970;
  }
`;

const KnowledgeIcon = styled.i`
  font-size: 25px;
  padding: 3%;
  pointer-events: none;
  color: #f97970;
`;

const KnowledgeRevealer = styled.div`
  display: none;
`;

const KnowledgeTextWrapper = styled.div`
  max-width: 80%;
  padding: 10%;
`;

export default function KnowledgeComponent() {
  return (
    <KnowledgeWrapper>
      <KnowledgeDiv>
        {CharacterJson.map((knowledge) => (
          <div key={knowledge.id}>
            <button>
              <KnowledgeIcon className={knowledge.symbol}></KnowledgeIcon>
            </button>
            <KnowledgeRevealer>
              <KnowledgeTitle>{knowledge.title}</KnowledgeTitle>
              <p>{knowledge.description}</p>
            </KnowledgeRevealer>
          </div>
        ))}
      </KnowledgeDiv>
      <KnowledgeTextWrapper>hier komt de text</KnowledgeTextWrapper>
    </KnowledgeWrapper>
  );
}
