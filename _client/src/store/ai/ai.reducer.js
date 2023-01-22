import * as aiTypes from './ai.types'


const exampleChat = [
    {
        id: 'user', 
        message: "Hello, this is a sample of user text to the bot!"}, 
    {   id: 'berry', 
        message: "This is an example of a response from the open AI bot."
    }]

const defaultChat = [
    {id: 'berry', message: "Hi, I'm Berry! Ask me anything."}
]


export function chatLog (state = defaultChat, action){
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

