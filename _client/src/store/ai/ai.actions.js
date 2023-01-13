import * as aiTypes from './ai.types';
import axios from 'axios'


const SEND_CHAT_AP = 'http://localhost:3030/ai/send-chat'





export const sendChat = (data) => async dispatch => {
    try {
        const sendChatRes = await axios.post(SEND_CHAT_AP, {data})
        
    } catch (error) {
        console.log("🚀 ~ file: ai.actions.js:10 ~ sendChat ~ error", error)
        
    }
}