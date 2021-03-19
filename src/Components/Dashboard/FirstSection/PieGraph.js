import React from "react";
import styled from "styled-components";
import GraphSection from "./GraphSection";
import GraphSectionTwo from "./GraphSectionTwo";

const PieParent = styled.div`
  flex: 1;
  height: 400px;
  background: #0f1218;
  margin: 20px 20px 20px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  padding: 15px;
`;

function PieGraph() {
  return (
    <PieParent>
      <GraphSection /> <GraphSectionTwo />
    </PieParent>
  );
}

export default PieGraph;
