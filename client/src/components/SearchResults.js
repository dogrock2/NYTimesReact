import React from "react";
import ResultCont from "./Searchcomponents/SearchResultCont";
import PropTypes from 'prop-types';
import APIexpress from "../Utils/APIexpress";

const SearchResults = props => {

    let allData = [];

    const clickEventToSave = (currentId) => {

        APIexpress.save(allData[currentId])
            .then(res => {
                if(res.data === 11000)
                    props.triggerModal("Duplicate Article","This article will not save.");
                else {
                    props.trigAdded();
                    props.trig();
                }
            })
            .catch(err => console.log(err));
    };

    const setResultsOutput = () => {
        this.res = [];
        let objectDataIn = props.data;
        let limit = props.qty;

        for(let i = 0; i < objectDataIn.length; i++) {
            if(i < limit) {
                if(!objectDataIn[i].pub_date)
                    objectDataIn[i].pub_date = "DATE: N/A";
                allData.push({
                    id: i+1,
                    title: objectDataIn[i].headline.main,
                    desc: objectDataIn[i].snippet,
                    url: objectDataIn[i].web_url,
                    date: objectDataIn[i].pub_date.slice(0, 10)
                    });
                this.res.push(
                    <ResultCont
                        title={objectDataIn[i].headline.main}
                        desc={objectDataIn[i].snippet}
                        url={objectDataIn[i].web_url}
                        cnt={i + 1}
                        clickFunc={clickEventToSave}
                        setId={i}
                        date={objectDataIn[i].pub_date.slice(0, 10)}
                        key={i}
                    />
                );
            }
        }

    };

    setResultsOutput();

    return(
        <div className={"card text-center mt-4"}>
            <h5 className={"card-title bg-primary py-2 text-light font-weight-bold rounded-top"}>Search Results</h5>
            <div className={"card-body"}>
                {this.res}
            </div>
        </div>
    );

};

SearchResults.props = {
    data: PropTypes.array,
     qty: PropTypes.number,
    trig: PropTypes.func
};

export default SearchResults;