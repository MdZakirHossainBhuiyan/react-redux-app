import { ActionTypes } from "../Constants/action-types";

const initialSate = {
    products: [],
}

export const productReducer = (state=initialSate, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
}

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
};