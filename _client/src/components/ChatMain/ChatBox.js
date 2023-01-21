import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as aiActions from '../../store/ai/ai.actions';

import Message from './Message'

const ChatBox = ({
    chatLog,
    aiContext,
    sendChat
}) => {
    const [input, setInput] = useState('');


    const onSubmit = async (e) => {
        console.log('Submitting!') //!REMOVE
        e.preventDefault();
        setInput('')
        await sendChat({id: 'user', message: input})
    }

  return (
    <ChatBoxContainer>
        <div className = 'chat-container'>
            {
                chatLog.map((message, idx) => <Message key = {idx} messageData = {message} />)
            }
        </div>
        <div className = 'bottom-container'>
            <div className = 'input-container'>
                <textarea
                    type = 'text'
                    placeholder = 'Type your message here...'
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                    className = 'text-area'
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
    ${'' /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */}

    .bottom-container{
        position: absolute;
        bottom: 0;
        left: 0;
        border: none;
        outline: none;
        width: 95%;
        height: 7%;
    }

    .input-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    textarea {
        width: 80%;
        margin: 0 10px;
        min-height: 10px;
        max-height: 300px;
        padding: 10px;
        font-size: 16px;
        resize: none;
        overflow: hidden;
        border: none;
        outline: none;
        border-radius: 5px;
        background: rgba( 255, 255, 255, 0.18 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4.5px );
        font-family: ${pr => pr.theme.font.family.secondary};
        font-weight: 400;
        color: ${pr => pr.theme.font.colors.secondary};
        overflow: auto;
    }
  
`;




