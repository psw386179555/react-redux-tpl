import * as actionTypes from '../constants/userinfo'

export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}

export function logout(data) {
    return {
        type: actionTypes.USERINFO_LOGOUT,
        data
    }
}