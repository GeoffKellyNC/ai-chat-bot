import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as aiActions from '../../store/ai/ai.actions';




const ChatBox = ({
    chatLog,
    aiContext,
    sendChat
}) => {
    const [input, setInput] = useState('');


    const onSubmit = async (e) => {
        console.log('Submitting!') //!REMOVE
        e.preventDefault();
        await sendChat({id: 'user', message: input})
        setInput('')
    }

  return (
    <ChatBoxContainer>
        <div className = 'chat-container'>

        </div>
        <div className = 'bottom-container'>
            <div className = 'input-container'>
                <textarea
                    type = 'text'
                    placeholder = 'Type your message here...'
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                />
                <button onClick = {onSubmit}> Send </button>
            </div>
        </div>
    </ChatBoxContainer>
  );
};

export default connect(st => ({
    chatLog: st.chatLog,
    aiContext: st.aiContext
}),{
    sendChat: aiActions.sendChat
}) (ChatBox);

const ChatBoxContainer = styled.div`
    width: 81%;
    height: 88%;
    position: fixed;
    top: 8%;
    left: 18%;
    background: rgb(9 7 20 / 76%);
    box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.9 );
    backdrop-filter: blur( 4.5px );
    -webkit-backdrop-filter: blur( 4.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    .bottom-container{
        position: absolute;
        bottom: 0;
        left: 0;
        border: none;
        outline: none;
        width: 95%;
        height: 7%;
    }

    textarea {
        width: 100%;
    }
  
`;




