import * as notifyTypes from './notify.types'




export const setAppNotification = (message) => async dispatch => {
    try {
        dispatch({
            type: notifyTypes.SET_APP_NOTIFICATION,
            payload: message
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_APP_NOTIFICATION
            })
        } , 5000)

    } catch (error) {
        console.log("🚀 ~ file: notify.actions.js:10 ~ setAppNotification ~ error", error)
        
    }
}


export const setErrorNotification = (message) => async dispatch => {
    try {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: message
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        } , 5000)

    } catch (error) {
        console.log("🚀 ~ file: notify.actions.js:10 ~ setAppNotification ~ error", error)
        
    }
}

