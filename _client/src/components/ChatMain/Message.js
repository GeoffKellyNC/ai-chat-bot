import React from 'react'
import styled from 'styled-components'

import berryImg from '../../assets/images/berry-logo.png'
import aiImg from '../../assets/images/ai-logo.png'

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
        <span className = 'message-text'> {messageData.message} </span>
        
    </MessageText>
  )
}

export default Message


const MessageText = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;


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

`

