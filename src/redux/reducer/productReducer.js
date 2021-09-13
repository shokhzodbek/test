import {

    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,


} from '../types'


export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_SUCCESS:
            return {

                products: action.payload,

            }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}