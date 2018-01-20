import React from "react";
import FormComponents from "./FormComponents";
import SavedResults from "./Saved";
import SearchResults from "./SearchResults";
import Modal from "./Modal/Modal";
import openSocket from 'socket.io-client';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: "",
            qty: 1,
            trigger: 0,
            msg1: "",
            msg2: "",
            open: false
        };

        this.socket = openSocket('http://localhost:3001');

        this.socket.on('articleAddedMsg', data => {
                this.chngModal("Articles", data.message);
        });

        this.socket.on('articleDelete', data => {
            this.chngModal("Deleted!", data.message);
        });
    }

    onDataReceived = (dataIn, qtyIn) => {
        if(dataIn)
            this.setState({
                data: dataIn.data.response.docs,
                qty: qtyIn
            });
    };

    triggerMount = () => {
        this.setState({
            trigger: this.state.trigger + 1
        });

    };

    sendMsg = () => {
        this.socket.emit("articleAddedMsg", {
            message: "New Article has been saved!"
        });
    };

    articleDeletedMsg = () => {
        this.socket.emit("articleDelete", {
            message: "Article deleted!"
        });
        this.setState({ open: false });
    };

    chngModal = (msg1, msg2) => {
        this.setState({
            msg1: msg1,
            msg2: msg2,
            open: true
        });
    };

    setDuplicateState = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Modal msg1={this.state.msg1}
                       msg2={this.state.msg2}
                       open={this.state.open}
                       setDup={this.setDuplicateState}
                />
                <FormComponents changeTopic={this.onDataReceived}/>
                <SearchResults data={this.state.data} qty={this.state.qty}
                               trig={this.triggerMount}
                               trigAdded={this.sendMsg}
                               triggerModal={this.chngModal}/>
                <SavedResults trigg={this.state.trigger} onDelete={this.articleDeletedMsg}/>
            </div>
        );
    }

}


export default Home;