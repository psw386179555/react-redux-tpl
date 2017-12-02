import * as actionTypes from '../constants/userinfo'

const initialState = {
	username:'sven'
}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
            return action.data
        default:
            return state
    }
}