import React from "react";
import styled from "styled-components";

const WordsParent = styled.div`
  flex: 1;
  height: 400px;
  background: #0f1218;
  margin: 20px 20px 20px;
  border-radius: 10px;
  padding: 15px;
`;

const WordsDiv = styled.div`
  position: relative;

  & p {
    margin: 0px;
    font-weight: 600;
  }
`;
//#f39189", "#bb8082", "#6e7582", "#046582
const ParaOne = styled.p`
  color: #f39189;
  position: absolute;
  font-size: 24px;
  font-weight: 800;
  top: 10rem;
  left: 2rem;
`;

const ParaTwo = styled.p`
  color: #bb8082;
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  top: 8rem;
  left: 9rem;
`;

const ParaThree = styled.p`
  color: #6e7582;
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  top: 10rem;
  left: 10rem;
`;

const ParaFour = styled.p`
  color: #046582;
  position: absolute;
  font-size: 11px;
  font-weight: 600;
  top: 7rem;
  left: 13rem;
`;

function WordsPart() {
  return (
    <WordsParent>
      <WordsDiv>
        <ParaOne>Customer</ParaOne>
        <ParaTwo>Client</ParaTwo>
        <ParaThree>Owner</ParaThree>
        <ParaFour>Empathy</ParaFour>
      </WordsDiv>
    </WordsParent>
  );
}

export default WordsPart;
