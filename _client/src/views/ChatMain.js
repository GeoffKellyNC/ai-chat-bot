import React from 'react'
import styled from 'styled-components'

import aiLogo from '../assets/images/ai-logo-nobg.png'
// components
import ChatBox from '../components/ChatMain/ChatBox'
import SideNav from '../components/ChatMain/SideNav'

const ChatMain =
    () => {
      return (
          <ChatPage className = 'main-chat'><div className = 'background-image'>
          <img src = {aiLogo} alt = 'ai-logo' />
          </div>
        <div className = 'main-chat-container'>
            <SideNav />
          <ChatBox /></div>
    </ChatPage>)
    }

export default ChatMain

const ChatPage = styled.div`
    height: 100vh;
    background: ${pr => pr.theme.colors.chat_background};
    min-width: 100%;


    .main-chat-container {
        display: flex;
    }


    .background-image {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 26%;
        top: 5%;
    }

    .background-image img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        height: 900px;
        width: 900px;
        position: relative;
        filter: blur(10px);
    }

    

    


`