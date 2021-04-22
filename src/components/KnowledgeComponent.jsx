import React from "react";
import styled from "styled-components";
let CharacterJson = [
  {
    id: 1,
    title: "Wie ben ik ?",
    description:
      "Ik ben een enthousiaste HBO opgeleide Front-End Developer en Scrum master. Met een passie voor innovatie, wil altijd op de hoogte zijn van de laatste trends. ",
    symbol: "fas fa-smile-wink",
  },
  {
    id: 2,
    title: "Persoonlijke eigenschappen",
    description:
      "Ik ben een echt mensen mens, heb een gevoel voor humor. Ben bijna altijd vrolijk. Collega's omschrijven mij als gezellig, gedreven, doorzettingsvermogen, creatief, communicatief, analytisch en beschik over een probleemoplossend vermogen. ",
    symbol: "fas fa-user-tag",
  },
  {
    id: 3,
    title: "Team",
    description:
      "Ik Krijg energie van het creëren van coole dingen met andere geeks. Het liefst werk ik samen met andere ontwikkelaars en draag bij aan een goede sfeer binnen het team.  ",
    symbol: "fas fa-users",
  },
  {
    id: 4,
    title: "Developmentstack",
    description:
      "Ik ben een enthousiast aan het ontwikkelen met HTML, CSS, JS, TS, React en Styled components ",
    symbol: "fas fa-code",
  },
  {
    id: 5,
    title: "Ambities",
    description:
      "Mijn ambitie is om een goede senior Front-end developer te worden die het team CoDE goed kan begeleiden en ondersteunen op alle fronten ",
    symbol: "fas fa-user-cog",
  },
  {
    id: 6,
    title: "Vrije tijd",
    description:
      "De meeste vrije tijd breng ik met mijn lieve dochter Lenthè door. Uiteraard is ontwikkellen een een grote hobby daarnaast heb ik nog een paard en een huis van 100 jaar oud waar het nodige aan moet gebeuren. Daar gaat de rest van de tijd inzitten",
    symbol: "fas fa-battery-three-quarters",
  },
  {
    id: 7,
    title: "Interest",
    description:
      "Mijn interesses liggen bij  HTML, CSS, JS, TS, React en Styled components daar wil ik mij eerst om focussen en daarna kijk ik verder. ",
    symbol: "fas fa-glasses",
  },
  {
    id: 8,
    title: "Signature",
    description:
      "Wat absoluut kenmerkend aan mij is, is dat ik altijd een goede sfeer in het team probeer te behouden, mensen samen breng en iedereen probeer te helpen waar ik kan.",
    symbol: "fas fa-signature",
  },
  {
    id: 9,
    title: "Specialties",
    description:
      "Ja dat vind ik altijd een beetje lastig om over mijzelf te zeggen. Mijn dochter vind mij de liefste Mama, dat is ook mijn grootste specialiteit. Mensen blijven graag eten als ik kook. Ben goed in het organiseren van dingen. ",
    symbol: "fas fa-grin-stars",
  },
];

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

export default function KnowledgeComponent() {
  return (
    <KnowledgeWrapper>
      <p>KnowledgeComponent </p>
    </KnowledgeWrapper>
  );
}
