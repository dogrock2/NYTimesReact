import React from "react";
import Topic from "./Formcomponents/Topic";
import EndDate from "./Formcomponents/EndDate";
import StartDate from "./Formcomponents/StartDate";
import Qty from "./Formcomponents/QtyOptions";
import SearchButton from "./Formcomponents/SearchButton";
import API from "../Utils/API";
import PropTypes from 'prop-types';

class FormComponents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topic: "",
            startDate: "",
            endDate: "",
            qty: 10,
            result: ""
        }
    }

    getTextInput = (event) => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

    };

    getSearch = () => {

        this.searchArticles(this.state.topic, this.state.startDate, this.state.endDate);

    };

    searchArticles = (topic, strtDate, endDate) => {

        API.search(topic, strtDate, endDate)
            .then(res => {
                console.log(res);
                this.setState({result: res});
                this.props.changeTopic(res, this.state.qty);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (

            <div className={"card text-center mt-4"}>
                <h5 className={"card-title bg-primary py-2 text-light font-weight-bold rounded-top"}>Search</h5>
                <div className={"card-body"}>
                    <Topic
                        name="topic"
                        type={"text"}
                        placeholder={"Search topic"}
                        chngeFunc={this.getTextInput}
                    />
                    <StartDate
                        name="startDate"
                        type={"text"}
                        placeholder={"YYYYMMDD"}
                        chngeFunc={this.getTextInput}
                    />
                    <EndDate
                        name="endDate"
                        type={"text"}
                        placeholder={"YYYYMMDD"}
                        chngeFunc={this.getTextInput}
                    />
                    <Qty
                        name="qty"
                        chngeFunc={this.getTextInput}
                    />
                    <SearchButton
                        exeFunc={this.getSearch}
                    />
                </div>
            </div>
        );
    }
}

FormComponents.props = {
    changeTopic: PropTypes.func
};

export default FormComponents;