import {Coupon, CouponStatus} from "./utils";

export type CouponReducerProps = {
	availables: Coupon[] | null
	status: CouponStatus
}

export const couponInitialState: CouponReducerProps = {
	availables: null,
	status: {
		firstLoad: true,
		hasError: false,
		message: "",
	},
}

export type CouponActions =
	{
		type: "SET_AVAILABLE_COUPONS"
		payload: Coupon[] | null
	}
	|
	{
		type: "SET_COUPON_STATUS"
		payload: CouponStatus
	}
	|
	{
		type: "RESET_COUPON_STATE"
	}


export const couponReducer = (state: CouponReducerProps, action: CouponActions): CouponReducerProps => {
	switch (action.type) {
		case "SET_AVAILABLE_COUPONS":
			return {
				...state,
				availables: action.payload,
			}
		case "SET_COUPON_STATUS":
			return {
				...state,
				status: action.payload,
			}
		case "RESET_COUPON_STATE":
			return couponInitialState
		default:
			return state
	}
}


