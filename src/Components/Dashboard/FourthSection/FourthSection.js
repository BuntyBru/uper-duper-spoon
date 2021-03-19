import React from "react";
import styled from "styled-components";
import Graphpart from "./Graphpart";
import GraphPartTwo from "./GraphPartTwo";

const ThirdSectionParent = styled.div`
  display: flex;
`;
function FourthSection() {
  return (
    <ThirdSectionParent>
      <GraphPartTwo />
      <Graphpart />
    </ThirdSectionParent>
  );
}

export default FourthSection;
