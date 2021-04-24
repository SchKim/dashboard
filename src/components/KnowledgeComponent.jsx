import React from "react";
import CharacterJson from "../shared/api.json";
import {
  FaAddressCard,
  FaVenus,
  FaUsers,
  FaCode,
  FaUserCog,
  FaGasPump,
  FaGlasses,
  FaSignature,
  FaSmile,
} from "react-icons/fa";

import {
  KnowledgeWrapper,
  KnowledgeDiv,
  KnowledgeTitle,
  KnowledgeIcon,
  KnowledgeRevealer,
  KnowledgeTextWrapper,
} from "./styles/styles";

function clickHandlerKarakter(id) {}

export default function KnowledgeComponent() {
  return (
    <KnowledgeWrapper>
      <KnowledgeDiv>
        {CharacterJson.map((knowledge) => (
          <div key={knowledge.id}>
            <button onClick={clickHandlerKarakter(knowledge.id)}>
              <KnowledgeIcon>{`< ${knowledge.symbol}/>`} </KnowledgeIcon>
            </button>
            <KnowledgeRevealer>
              <KnowledgeTitle>{knowledge.title}</KnowledgeTitle>
              <p>{knowledge.description}</p>
            </KnowledgeRevealer>
          </div>
        ))}
      </KnowledgeDiv>
      <KnowledgeTextWrapper>
        hier komt de text <FaGlasses />
      </KnowledgeTextWrapper>
    </KnowledgeWrapper>
  );
}

// react FONTAwesome
