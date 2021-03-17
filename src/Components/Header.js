import React from "react";
import { HeaderElement } from "../Shared/StyledComps/Header";
import logo from "../logo.svg";

const Header = () => {
  return (
    <HeaderElement>
      <div className="image-holder">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="otherLinks">
        <button>Home</button>
        <button>Analytics</button>
        <button>About</button>
      </div>
    </HeaderElement>
  );
};

export default Header;
