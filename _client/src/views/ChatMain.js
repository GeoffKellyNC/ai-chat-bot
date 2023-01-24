import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as aiActions from '../store/ai/ai.actions'

import aiLogo from '../assets/images/ai-logo-nobg.png'

//components
import AppNotification from '../components/AppNotification.jsx'
import AppErrorNotification from '../components/AppErrorNotification.jsx'
import ChatBox from '../components/ChatMain/ChatBox'
import SideNav from '../components/ChatMain/SideNav'

const ChatMain = ({
    selectedModel,
    appErrorNotification,
    appNotification
}) => {
  return (
    <ChatPage className = 'main-chat'>
                {
            appErrorNotification.active && <AppErrorNotification appErrorNotification = { appErrorNotification } />
        }
        {
            appNotification.active && <AppNotification appNotification = { appNotification } />
        }
        <div className = 'background-image'>
            <img src = {aiLogo} alt = 'ai-logo' />
        </div>
        <div className = 'main-chat-container'>
            <SideNav />
            <ChatBox />
        </div>
    </ChatPage>
  )
}

export default connect(st => ({
    selectedModel: st.selectedModel,
    appErrorNotification: st.appErrorNotification,
    appNotification: st.appNotification
}),null) (ChatMain)


const ChatPage = styled.div`
    height: 100vh;
    background: ${pr => pr.theme.colors.chat_background};
    min-width: 100%;
    overflow: hidden;


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