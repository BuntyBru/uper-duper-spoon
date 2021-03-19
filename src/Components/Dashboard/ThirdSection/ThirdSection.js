import React from "react";
import styled from "styled-components";
import Graphpart from "./Graphpart";
import GraphPartTwo from "./GraphPartTwo";

const ThirdSectionParent = styled.div`
  display: flex;
`;
function ThirdSection() {
  return (
    <ThirdSectionParent>
      <Graphpart />
      <GraphPartTwo />
    </ThirdSectionParent>
  );
}

export default ThirdSection;
