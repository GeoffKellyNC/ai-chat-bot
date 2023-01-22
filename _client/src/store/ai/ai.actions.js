import * as aiTypes from './ai.types';
import axios from 'axios'


const SEND_CHAT_AP = 'http://localhost:3030/ai/send-chat'





export const sendChat = (data) => async dispatch => {
    try {

        dispatch({
            type: aiTypes.UPDATE_CHAT_LOG,
            payload: data
        })

        const sendChatRes = await axios.post(SEND_CHAT_AP, {data})

        console.log("🚀 ~ file: ai.actions.js:20 ~ sendChatRes: ", sendChatRes.data)

        dispatch({
            type: aiTypes.UPDATE_CHAT_LOG,
            payload: {
                id: 'berry',
                message: sendChatRes.data
            }
        })
        
    } catch (error) {
        console.log("🚀 ~ file: ai.actions.js:10 ~ sendChat ~ error", error)
        
    }
}


export const chooseModel = (model) => async dispatch => {

    dispatch({
        types: aiTypes.SET_MODEL,
        payload: model
    })

    return
}