import React from "react";
import styled from "styled-components";
import GraphPart from "./GraphPart";

const SecondSectionParent = styled.div`
  margin: 20px 20px 20px;
  background: #0f1218;
`;
function FifthSection() {
  return (
    <SecondSectionParent>
      <GraphPart />
    </SecondSectionParent>
  );
}

export default FifthSection;
