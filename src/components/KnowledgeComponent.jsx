import React, { useState, useEffect } from "react";
import Typing from "react-typing-animation";
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
  KnowledgeIcon,
  KnowledgeTextWrapper,
} from "./styles/styles";

export default function KnowledgeComponent() {
  const [description, setDescription] = useState("");

  //probleem : discription word geladen.. en typing ... maar blijft lopen en plakt alles aan elkaar vast
  // als ik op een btn click wil ik dat die stopt en verder gaat met een ander

  // use effe dependencie description

  useEffect(() => {
    console.log("is veranderd");
    const test = description;
    setDescription("");
    console.log(test);
    //setDescription();
  }, []);

  return (
    <KnowledgeWrapper>
      <KnowledgeDiv>
        {CharacterJson.map((knowledge) => (
          <div key={knowledge.id}>
            <button onClick={() => setDescription(knowledge.description)}>
              <KnowledgeIcon>{getIcon(knowledge.symbol)}</KnowledgeIcon>
            </button>
          </div>
        ))}
      </KnowledgeDiv>

      {description && (
        <KnowledgeTextWrapper>
          <Typing>{description}</Typing>
        </KnowledgeTextWrapper>
      )}
    </KnowledgeWrapper>
  );
}

function getIcon(symbol) {
  let item = "";

  switch (symbol) {
    case "FaAddressCard":
      item = <FaAddressCard />;
      break;

    case "FaVenus":
      item = <FaVenus />;
      break;

    case "FaUsers":
      item = <FaUsers />;
      break;

    case "FaCode":
      item = <FaCode />;
      break;

    case "FaUserCog":
      item = <FaUserCog />;
      break;

    case "FaGasPump":
      item = <FaGasPump />;
      break;

    case "FaGlasses":
      item = <FaGlasses />;
      break;

    case "FaSignature":
      item = <FaSignature />;
      break;

    case "FaSmile":
      item = <FaSmile />;
      break;

    default:
      item = <FaSmile />;
      break;
  }
  return item;
}
