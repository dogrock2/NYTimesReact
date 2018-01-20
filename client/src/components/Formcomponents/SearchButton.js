import React from "react";
import "./FormComponents.css";

const SearchButton = (props) =>

    <button className={"btn btn-primary fontStyle"} id={"searchBtn"} onClick={props.exeFunc}>Search</button>;


export default SearchButton;