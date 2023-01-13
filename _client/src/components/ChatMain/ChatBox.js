import React from 'react';
import styled from 'styled-components';

const ChatBox = () => {
  return (
    <ChatBoxContainer>
  
    </ChatBoxContainer>
  );
};


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
  
`;


export default ChatBox;