import React from "react";
import "./HeaderStyle.css";

const Header = () =>
    <header id={"headingContainer"} className={"py-4 fixed-top bg-white"}>
      <div id={"mainHeading"} className={"text-center"}>New York Times Articles Search</div>
      <div id={"secondaryHeading"} className={"text-center"}>Search for and save articles of interest!</div>
    </header>;



export default Header;



