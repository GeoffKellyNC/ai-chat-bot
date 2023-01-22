import * as notifyTypes from './notify.types'


export function appErrorNotification(state = { active: false, message: ''}, action){
    switch(action.type){
        case notifyTypes.SET_ERROR_NOTIFICATION:
            return {
                ...state,
                active: true,
                message: action.payload
            }
        case notifyTypes.CLEAR_ERROR_NOTIFICATION:
            return {
                ...state,
                active: false,
                message: ''
            }
        default:
            return state;
    }
}

export function appNotification(state = { active: false, message: ''}, action){
    switch(action.type){
        case notifyTypes.SET_APP_NOTIFICATION:
            return {
                ...state,
                active: true,
                message: action.payload
            }
        case notifyTypes.CLEAR_APP_NOTIFICATION:
            return {
                ...state,
                active: false,
                message: ''
            }
        default:
            return state
    }
}