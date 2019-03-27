import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearMessages } from '../../actions/message-actions';

class MessagesComponent extends Component {
    render() {
        return (
            <div className='ui message'>
                <div className='ui top left attached label'>Messages</div>
                <h5>Messages</h5>
                <div className='ui list'>
                    {this.props.messages.map((msg, index) => (
                        <div className='item' key={index}>
                            {msg}
                        </div>
                    ))}
                </div>
                <div className='ui small button' onClick={this.props.clearMessages}>
                    Clear
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearMessages() {
            clearMessages(dispatch);
        }
    };
};

const Messages = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagesComponent);

export { Messages };
