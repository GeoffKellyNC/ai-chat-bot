import { combineReducers } from 'redux';

import { aiContext } from './ai/ai.reducer'
import { chatLog } from './ai/ai.reducer'





export default combineReducers({
    aiContext,
    chatLog
  
})