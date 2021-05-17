import React, { useState, useEffect } from "react";
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

/// naar werkende versie

export default function KnowledgeComponent() {
  const [fullText, setFullText] = useState("");
  // const [index, setIndex] = useState(0);
  const [description, setDescription] = useState("");
  const [isRunnning, setIsRunning] = useState(false);

  //handel click vangt de waarde en vuly die waar de bij setFulltext => fulltext
  // const handleClick = (description) => {
  //   // setFullText("");

  //   setDescription("");
  //   clearTimeout();
  //   setIndex(0);
  //   console.log("index", index);
  //   setFullText(description);
  // };

  //const typ = () => {
  // setDescription("");
  // setFullText("");
  // setIndex(() => 0);

  // index staat op 0 als fulltext kleinder is
  //   if (index < fullText.length) {
  //     function go() {
  //       //set setTimeout regelt de vertraging
  //       setTimeout(() => {
  //         //  set description wordt gevuld en ook met de huidige waarde daarvan / fulltext is de zin en de index loopt daar hoorheen hierna verhoogd met +1
  //         setDescription(description + fullText[index]);
  //         setIndex(index + 1);
  //       }, 70);
  //     }
  //     go();
  //   }
  // };

  // https://mattermost.eminjenv.nl/team-code/

  useEffect(() => {
    console.log(fullText);

    if (fullText.length || isRunnning) {
      console.log("useEfect");
      let index = 0;
      setDescription("");
      // clearInterval(interval);
      const interval = setInterval(() => {
        console.log("interval");
        setDescription(description + fullText[index]);
        console.log(description);
        index++;
        console.log(index);

        // test
        if (index > fullText.length) {
          console.log("2 if");
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 150);
    }
  }, [fullText]);

  // useEffect(() => {
  //   console.log("useEffect");
  //   //typ(); = typ is ook niet te stoppen
  //   if (fullText.length) {
  //     //set setTimeout regelt de vertraging
  //     setTimeout(() => {
  //       //  set description wordt gevuld en ook met de huidige waarde daarvan / fulltext is de zin en de index loopt daar hoorheen hierna verhoogd met +1
  //     }, 70);
  //   }
  //   // in de dependencie wil ik allen de index en fulltext omdat description 2 x renderd en dat trillingen geeft
  // }, [fullText]);

  //TODO probleen is dat als use effect eenmaal loopt .. die nioet meer stopt als in op en andere btn druk... en als die stopt word veld niet leggegooid maar plakt e andere tekst eraanvast
  return (
    <KnowledgeWrapper>
      <KnowledgeDiv>
        {CharacterJson.map((knowledge) => (
          <div key={knowledge.id}>
            <button onClick={() => setFullText(knowledge.description)}>
              <KnowledgeIcon>{getIcon(knowledge.symbol)}</KnowledgeIcon>
            </button>
          </div>
        ))}
      </KnowledgeDiv>

      {description && (
        <KnowledgeTextWrapper>{description}</KnowledgeTextWrapper>
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
