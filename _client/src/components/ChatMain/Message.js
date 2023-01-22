import React from 'react'
import styled from 'styled-components'

import berryImg from '../../assets/images/berry-logo.png'
import aiImg from '../../assets/images/ai-logo.png'

import TextTypeWriter from './TextTypeWriter'

const Message = ({
    messageData
}) => {
  return (
    <MessageText className = 'message-container'>
        <img 
            src = { messageData.id === 'user' ? aiImg : berryImg}
            alt = 'message-avatar'
            className = 'message-avatar'
        />
        <span className = {`message-text ${messageData.id === 'user' ? 'user-message' : 'ai-message'}`}> 
        {
            messageData.id === 'user' ? messageData.message : <TextTypeWriter text = {messageData.message} />
        }
        </span>
        
    </MessageText>
  )
}

export default Message


const MessageText = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-family: ${pr => pr.theme.font.family.secondary};


    .message-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .message-text {
        margin-left: 10px;
        font-size: 1.2rem;
        color: white;
    }

    .user-message {
        background: #ff2e53a8;
        padding: 10px 15px;
        border-radius: 10px;
    }

    .ai-message {
        background: #01a1ffba;
        padding: 10px 15px;
        border-radius: 10px;
    }

`

