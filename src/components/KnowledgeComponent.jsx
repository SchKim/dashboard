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
  // KnowledgeTitle,
  KnowledgeIcon,
  KnowledgeTextWrapper,
} from "./styles/styles";

export default function KnowledgeComponent() {
  const [description, setDescription] = React.useState("");
  //let timer = 0;

  // function loopText(setDescription) {
  //   const gesplitteText = description.split("");
  //   //console.log(gesplitteText);

  //   if (!setDescription) return;
  //   stopTimer();

  //   if (gesplitteText.length > 0) {
  //     let kip = gesplitteText.shift();
  //     let ei = (kip += kip);
  //     console.log(ei);
  //   } else {
  //     console.log(timer);
  //     stopTimer(timer);
  //     return false;
  //   }
  //   timer = setTimeout(function () {
  //     loopText(setDescription);
  //   }, 70);
  // }
  // function stopTimer() {
  //   clearTimeout(timer);
  // }

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
      {/* <KnowledgeTextWrapper>{loopText(description)}</KnowledgeTextWrapper> */}
      <KnowledgeTextWrapper>{description}</KnowledgeTextWrapper>
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
