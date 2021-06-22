import {
	CREATE_ORDER_FAIL,
	CREATE_ORDER_REQUEST,
	CREATE_ORDER_SUCCESS,
	GET_ORDER_DETAILS_FAIL,
	GET_ORDER_DETAILS_REQUEST,
	GET_ORDER_DETAILS_SUCCESS,
	ORDER_PAY_FAIL,
	ORDER_PAY_REQUEST,
	ORDER_PAY_SUCCESS
} from "./types";

const initialState = {
	loading: false,
	error: null,
	orderDetails: null
};

const orderReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CREATE_ORDER_REQUEST:
		case GET_ORDER_DETAILS_REQUEST:
		case ORDER_PAY_REQUEST:
			return {
				...state,
				loading: true
			};
		case CREATE_ORDER_SUCCESS:
		case GET_ORDER_DETAILS_SUCCESS:
		case ORDER_PAY_SUCCESS:
			return {
				...state,
				loading: false,
				orderDetails: payload
			};
		case CREATE_ORDER_FAIL:
		case GET_ORDER_DETAILS_FAIL:
		case ORDER_PAY_FAIL:
			return {
				...state,
				loading: false,
				error: payload
			};

		default:
			return state;
	}
};

export default orderReducer;
