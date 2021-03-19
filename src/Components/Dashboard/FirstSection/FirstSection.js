import React from "react";
import styled from "styled-components";
import WordsPart from "./WordsPart";
import PieGraph from "./PieGraph";

const FSParent = styled.div`
  display: flex;
`;

function FirstSection() {
  return (
    <FSParent>
      <WordsPart />
      <PieGraph />
    </FSParent>
  );
}

export default FirstSection;
