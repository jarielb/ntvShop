import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "../constants";

const initialState = {
    products: [],
    loading: false,
    refreshing: false,
};

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                loading: true,
                refreshing: true,
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.response,
                refreshing: false
            }
        default:
            return state;
    }
};

export default productReducer;
