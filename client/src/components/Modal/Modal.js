import React from 'react';
import PropTypes from 'prop-types';
import MyModal from "react-modal";

class Modal extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        };



         this.customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        };
    }

    componentWillReceiveProps(nxtProps){
        console.log("at props = "+JSON.stringify(nxtProps.open));
        this.toggler = nxtProps.open;
    };

    render() {

       this.closeModal = () => {
           this.props.setDup();
           this.toggler = false;
           this.setState({
               open: false,
               key: Math.random()
           });
        };



        return (
            <MyModal
                contentLabel="Modal"
                isOpen={this.toggler}
                style={this.customStyles}
                ariaHideApp={false}
                key={this.state.key}
            >
                <div className={"text-center"}>
                <h1>{this.props.msg1}</h1>
                <p>{this.props.msg2}</p>
                </div>
                <div className={"text-center"}>
                <button className={"btn btn-info"} onClick={this.closeModal}>OK</button>
                </div>
            </MyModal>

        );
    }
}

Modal.propTypes = {
    msg: PropTypes.string
};

export default Modal;