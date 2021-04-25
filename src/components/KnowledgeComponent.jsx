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
  KnowledgeTextWrapper,
} from "./styles/styles";
let timer = 0;
// waarom doet dit het hahahah

const textDiv = KnowledgeTextWrapper;

function loopText(charArray, textContainer) {
  if (!charArray) return;
  stopTimer();
  if (charArray.length > 0) {
    textContainer.innerHTML += charArray.shift();
  } else {
    console.log(timer);
    stopTimer(timer);
    return false;
  }
  timer = setTimeout(function () {
    loopText(charArray, textContainer);
  }, 70);
}

function stopTimer() {
  clearTimeout(timer);
}

function clickHandlerKarakter(text, textDiv) {
  stopTimer(timer);
  textDiv.innerHTML = "";
  const gesplitteText = text.split("");
  loopText(gesplitteText, textDiv);
}

export default function KnowledgeComponent() {
  return (
    <KnowledgeWrapper>
      <KnowledgeDiv>
        {CharacterJson.map((knowledge) => (
          <div key={knowledge.id}>
            <button
              onClick={clickHandlerKarakter(knowledge.description, textDiv)}
            >
              <KnowledgeIcon>{bla(knowledge.symbol)}</KnowledgeIcon>
            </button>
            {/* <KnowledgeTitle>{knowledge.title}</KnowledgeTitle>
            <p>{knowledge.description}</p> */}
          </div>
        ))}
      </KnowledgeDiv>
      <KnowledgeTextWrapper>
        hier komt de text <FaGlasses />
      </KnowledgeTextWrapper>
    </KnowledgeWrapper>
  );
}

function bla(symbol) {
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

// react FONTAwesome
