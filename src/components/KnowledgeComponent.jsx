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
import { text } from "@fortawesome/fontawesome-svg-core";

//function clickHandlerKarakter(text) {
// const gesplitteText = text.split("");
//nieuwe iets  += gesplitteText.shift();
//}
// function stopTimer() {
//   clearTimeout(timer);
// }
//klaar {stopTimer(timer);
//     return false;}
//timer = setTimeout(function () {
//     clickHandlerKarakter(text);
//   }, 70);

// function looptext(text) {
//   const splittedText = text.split("");
//   let kip = splittedText.shift();
//   console.log(kip);
//   console.log(splittedText);
//   return text;
// }

export default function KnowledgeComponent() {
  const [description, setDescription] = React.useState("");

  function loopText() {
    let newText = "";

    for (let index = 0; index < description.length; index++) {
      setTimeout(() => {
        newText += description.charAt(index);
        return newText;
      }, 1000);
    }
  }

  return (
    <KnowledgeWrapper>
      <KnowledgeDiv>
        {CharacterJson.map((knowledge) => (
          <div key={knowledge.id}>
            <button onClick={() => setDescription(knowledge.description)}>
              <KnowledgeIcon>{getIcon(knowledge.symbol)}</KnowledgeIcon>
            </button>
            {/* <KnowledgeTitle>{knowledge.title}</KnowledgeTitle>
            <p>{knowledge.description}</p> */}
          </div>
        ))}
      </KnowledgeDiv>
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
