import React from "react";
import "./SavedCont.css";
import PropTypes from 'prop-types';

const SavedCont = (props) =>

    <div className={"row"}>
        <div className={"col-12 rounded border text-left my-2 pt-2 setBg"}>
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <span className={"p-2 rounded text-success font-weight-bold mr-2"}>{props.cnt}</span>
                    <span className={"font-weight-bold text-warning"}>{props.title}</span>
                </div>
            </div>

            <div className={"row"}>
                <div className="col-12 ml-2"><p><i>{props.desc}</i></p></div>
            </div>

            <div className={"row"}>
                <div className="col-12 ml-2"><a href={props.url}>{props.url}</a></div>
            </div>

            <div className={"row pl-2 pb-1"}>
                <div className={"col-5"}>{props.date}</div>
                <div className={"col-5"}> </div>
                <div className={"col-2"}><button className={"btn btn-danger"}
                                                 onClick={() => props.delFnc(props.id)}>{"DELETE"}</button></div>
            </div>
        </div>
    </div>;

SavedCont.props = {
    title: PropTypes.string,
    desc: PropTypes.string,
    url: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string
};

export default SavedCont;