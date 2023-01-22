import { combineReducers } from 'redux';

import { aiContext } from './ai/ai.reducer'
import { appErrorNotification } from './notifications/notify.reducer'
import { appNotification } from './notifications/notify.reducer'
import { chatLog } from './ai/ai.reducer'
import { selectedModel } from './ai/ai.reducer'





export default combineReducers({
    aiContext,
    appErrorNotification,
    appNotification,
    chatLog,
    selectedModel
  
})