import * as aiTypes from './ai.types'




export function chatLog (state = [{id: 'user', message: 'This is an example of user text!'}, { id: 'berry', message: 'This is an response example from berry!!'}], action){
    switch(action.type){
        case aiTypes.UPDATE_CHAT_LOG:
            return [...state, action.payload]
        default:
            return state
    }
}

export function aiContext (state = [], action){
    switch(action.type){
        case aiTypes.UPDATE_AI_CONTEXT:
            return [...state, action.payload]
        default:
            return state
    }
}

