import React from "react";
import { LeftNavBar } from "../Shared/StyledComps/Layout";
import dictionary from "../Assets/dictionary.png";
import entity from "../Assets/organization.png";
import setup from "../Assets/setup.png";
import man from "../Assets/man.png";

function LeftNav() {
  return (
    <LeftNavBar>
      <ul>
        <li>
          <img alt="dict" src={dictionary}></img>
        </li>
        <li>
          <img alt="entity" src={entity}></img>
        </li>
        <li>
          <img alt="setup" src={setup}></img>
        </li>
        <li className="lastli">
          <img alt="man" src={man}></img>
        </li>
      </ul>
    </LeftNavBar>
  );
}

export default LeftNav;
