import axios from 'axios'
import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../types'

export const login = (username, password, subdomain) => async(dispatch) => {
    try {


        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        let details = {
            '_username': username,
            '_password': password,
            '_subdomain': subdomain
        };
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const { data } = await axios.post(
            `https://${subdomain}.ox-sys.com/security/auth_check`, formBody, config

        )
       
        data['sub']=subdomain
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
           
        })
     
   
        localStorage.setItem('userInfo', JSON.stringify(data))
        


    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail ?
                error.response.data.detail : error.message,
        })
    }
}
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })

}