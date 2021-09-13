import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT

} from '../types'


export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {

        case USER_LOGIN_SUCCESS:
            return { userInfo: action.payload, domain: action.sub }

        case USER_LOGIN_FAIL:
            return { error: true }
        case USER_LOGOUT:
            return {}



        default:
            return state
    }
}