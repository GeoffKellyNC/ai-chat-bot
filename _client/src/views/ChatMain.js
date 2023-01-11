import React from 'react'
import styled from 'styled-components'

const ChatMain = () => {
  return (
    <ChatPage className = 'main-chat-container'>
      
    </ChatPage>
  )
}

export default ChatMain


const ChatPage = styled.div`
  height: 100vh;
  background: ${pr => pr.theme.colors.chat_background};


`