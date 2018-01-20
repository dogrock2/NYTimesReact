import React from "react";
import APIexpress from "../Utils/APIexpress";
import SavedCont from "./Savedcomponents/SavedCont";

class Saved extends React.Component {

    constructor(props) {
        super(props);

        this.results = [];
        this.counter = 0;

        this.state = {
            allResults: []
        };

    };

    componentDidMount() {
        this.getAllData();
    };

    componentWillReceiveProps(){
        this.getAllData();
    };

    getAllData = () => {
        APIexpress.search()
            .then(res => {
                this.formatData(res.data);
            })
            .catch(err => console.log(err));

    };

    deleteArticle = (artId) => {
        APIexpress.delete(artId)
            .then(res => {
                this.props.onDelete();
                this.getAllData();
            })
            .catch(err => console.log(err));
    };


    formatData = dIn => {

        this.cnt1 = 1;
        this.cnt2 = 1;
        this.results = [];
        for (let i = 0; i < dIn.length; i++) {
            this.results.push(<SavedCont
                id={dIn[i]._id}
                title={dIn[i].title}
                desc={dIn[i].desc}
                url={dIn[i].url}
                date={dIn[i].date}
                key={this.cnt1++}
                cnt={this.cnt2++}
                delFnc={this.deleteArticle}
            />);
        }
        this.counter = this.cnt2 - 1;

        this.setState({allResults: this.results});
    };


    render() {
        return (

            <div className={"card text-center mt-4 mb-2"}>
                <h5 className={"card-title bg-info py-2 text-light font-weight-bold rounded-top"}>
                    Saved Articles({this.counter})</h5>
                <div className={"card-body"}>
                    {this.state.allResults}
                </div>
            </div>
        );

    };
}


export default Saved;