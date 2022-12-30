import {
	CouponInBannerContextProps,
	CouponInBannerProviderProps,
	valuesTheContextCouponInBannerReturnsByDefault
} from './utils'


import React, {createContext, useContext, useEffect, useReducer} from 'react'
import {couponInitialState, couponReducer} from "./reducer";
import axios from "axios";
import {useMutation} from "react-apollo";
import ADD_COUPON from "../../../../graphql/addCoupon.gql";

import {OrderForm as OrderManager} from 'vtex.order-manager'


/**
 *
 * * Criando o contexto *
 *
 */

export const CouponInBannerContext = createContext<CouponInBannerContextProps>(
	valuesTheContextCouponInBannerReturnsByDefault
)

/**
 *
 * * --- --- --- --- Criando o contexto --- --- --- --- *
 *
 */

/**
 *
 * * Criando o provider *
 *
 */

const CouponInBannerProvider = ({
																	children
																}: CouponInBannerProviderProps) => {
	const [coupon, dispathCoupon] = useReducer(couponReducer, couponInitialState)

	function pastCouponIsPresentInTheAvailableCoupons(couponAttachedInBanner: string) {
		return coupon?.availables?.some(someCoupon => someCoupon.couponCode === couponAttachedInBanner)
	}

	async function dispathCouponStatusError(message: string): Promise<void> {
		dispathCoupon({
			type: 'SET_COUPON_STATUS',
			payload: {
				hasError: true,
				firstLoad: false,
				message
			}
		})
	}

	async function dispathCouponStatusSuccess(message: string): Promise<void> {
		dispathCoupon({
			type: "SET_COUPON_STATUS",
			payload: {
				hasError: false,
				firstLoad: false,
				message
			}
		})
	}

	const [addCoupon] = useMutation(ADD_COUPON, {
		onCompleted: (data: any) => {
			const marketingDataCoupon = data?.insertCoupon?.marketingData
			setOrderForm((prevOrderForm: any) => {
				return {
					...prevOrderForm,
					marketingDataCoupon
				}
			})
		},
	})

	const {useOrderForm} = OrderManager


	const {
		orderForm,
		setOrderForm
	}: any = useOrderForm()

	async function addCouponToCart(couponAttachedInBanner: string): Promise<void> {
		await addCoupon(
			{
				variables: {
					orderformID: orderForm?.orderFormId,
					text: couponAttachedInBanner,
				}
			}
		)
	}


	useEffect(() => {
		const fetchAllAvailableCoupons = async (): Promise<void> => {
			const couponPath = `api/rnb/pvt/coupon`
			const pathName = window.location.origin

			const apiResponse = await axios.get(`${pathName}/${couponPath}`)
			const data = await apiResponse.data


			dispathCoupon({
				type: "SET_AVAILABLE_COUPONS",
				payload: data,
			})

		}

		fetchAllAvailableCoupons()
	}, [])


	return (
		<CouponInBannerContext.Provider value={{
			dispathCouponStatusSuccess,
			dispathCouponStatusError,
			pastCouponIsPresentInTheAvailableCoupons,
			addCouponToCart,
			coupon
		}}>
			{children}
		</CouponInBannerContext.Provider>
	)
}

/**
 *
 * * --- --- --- --- Criando o provider --- --- --- --- *
 *
 */

/**
 *
 * * criando o contexto *
 *
 */

const useCouponInBanner = () => useContext(CouponInBannerContext)

/**
 *
 * * --- --- --- --- criando o contexto --- --- --- --- *
 *
 */

export {
	CouponInBannerProvider, useCouponInBanner
}


