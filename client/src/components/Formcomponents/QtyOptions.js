import React from "react";
import "./FormComponents.css";
import PropTypes from 'prop-types';

const QtyOptions = (props) =>

    <div className={"form-group"}>
        <label className={"fontStyle"}>How many articles?</label>
        <select className={"form-control bgColorStyling"} onChange={(e) => props.chngeFunc(e)} name={props.name}>
            <option>10</option>
            <option>5</option>
        </select>
    </div>;

QtyOptions.props = {
    name: PropTypes.string
};

export default QtyOptions;