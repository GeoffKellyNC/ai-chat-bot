import './styles/App.css';

import React from 'react'
import {Route, Routes} from 'react-router-dom'
import styled from 'styled-components'

// Components
import ChatMain from './views/ChatMain'

function App() {
  return (
    <AppStyled>
		<Routes>
            <Route path = '/' element = {
    <ChatMain />} />
        </Routes>
    </AppStyled>
  );
}

export default App;


const AppStyled = styled.div`


`
