import React from "react";
import "./FormComponents.css";
import PropTypes from 'prop-types';

const StartDate = (props) =>

    <div className="form-group text-center">
        <label className={"fontStyle"}>Start Date</label>
        <input onChange={(e) => props.chngeFunc(e)} name={props.name} type={props.type} className={"form-control bgColorStyling"}
               placeholder={props.placeholder}/>
    </div>;

StartDate.props = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

export default StartDate;