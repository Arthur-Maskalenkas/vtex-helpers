import type {ReactNode} from 'react'

import type {CouponReducerProps} from './reducer'
import {couponInitialState} from './reducer'

export type CouponInBannerProviderProps = {
	children: ReactNode
}

export type CouponInBannerContextProps = {
	dispathCouponStatusSuccess: (message: string) => void
	dispathCouponStatusError: (message: string) => void
	pastCouponIsPresentInTheAvailableCoupons: (
		couponAttachedInBanner: string
	) => boolean | undefined
	addCouponToCart: (couponAttachedInBanner: string) => void
	coupon: CouponReducerProps
}

export const valuesTheContextCouponInBannerReturnsByDefault: CouponInBannerContextProps = {
	dispathCouponStatusSuccess: () => null,
	dispathCouponStatusError: () => null,
	pastCouponIsPresentInTheAvailableCoupons: () => false,
	addCouponToCart: () => null,
	coupon: couponInitialState,
}

export interface Coupon {
	lastModifiedUtc: Date
	utmSource: string
	utmCampaign: string
	couponCode: string
	isArchived: boolean
	maxItemsPerClient: number
	expirationIntervalPerUse: string
}

export interface CouponStatus {
	hasError: boolean
	message: string
	firstLoad: boolean
}
