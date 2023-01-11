import React from 'react'
import './styles/App.css';
import styled from 'styled-components'

//Components
import ChatMain from './views/ChatMain'

function App() {
  return (
    <AppStyled>
		<ChatMain />
    </AppStyled>
  );
}

export default App;


const AppStyled = styled.div`


`
