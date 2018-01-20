import React from "react";
import "./FormComponents.css";
import PropTypes from 'prop-types';

const Topic = (props) =>

    <div className="form-group text-center">
        <label className={"fontStyle"}>Topic</label>
        <input onChange={(e) => props.chngeFunc(e)} name={props.name} type={props.type}
               className={"form-control bgColorStyling font-weight-bold text-primary topic"}
               placeholder={props.placeholder}/>
    </div>;

Topic.props = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

export default Topic;