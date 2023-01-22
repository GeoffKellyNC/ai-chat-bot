import React from 'react'
import styled from 'styled-components'

const AppNotification = ({ appNotification }) => {
  return (
    <AppNotificationStyled>
        <div className = 'notification-container'>
            <span className = 'notification-text'>{ appNotification.message }</span>
        </div>
    </AppNotificationStyled>
  )
}

export default AppNotification

const AppNotificationStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    position: absolute;
    z-index: 1000;

    .notification-container {
        font-family: ${pr => pr.theme.font.family.primary};
        color: white;
        background: rgba(0, 255, 88, 0.5);
        box-shadow: 0 8px 32px 0 rgba( 3, 3, 13, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 5px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        height: 40px;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .notification-text {
        padding: 1rem;
    }


`