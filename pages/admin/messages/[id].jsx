import React from 'react';
import ReactDOM from 'react-dom';

const Messages = (props) => {
    return (
        <>
        hello
            {/* {props.messages.map(message => {
                <input type="date"/>
                <input type="text"/>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            })} */}
        </>
    )
}

Messages.getInitialProps = async (context) => {
    const uid = context.query.id

    return {
        messages: [],
        uid
    }
}

export default Messages;