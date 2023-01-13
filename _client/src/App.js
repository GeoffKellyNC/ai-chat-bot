import React from 'react'
import './styles/App.css';
import styled from 'styled-components'
import {Routes, Route} from 'react-router-dom'

//Components
import ChatMain from './views/ChatMain'

function App() {
  return (
    <AppStyled>
		<Routes>
            <Route path = '/' element = {<ChatMain />} />
        </Routes>
    </AppStyled>
  );
}

export default App;


const AppStyled = styled.div`


`
