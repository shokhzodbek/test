import axios from 'axios'
import {

    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,


} from '../types'


export const getProducts = (size, page) => async(dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },

        } = getState()
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.post(`https://${userInfo.sub}.ox-sys.com/variations`, { "size": size, "page": page }, config)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail ?
                error.response.data.detail : error.message,
        })
    }
}