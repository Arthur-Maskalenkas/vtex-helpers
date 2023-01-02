import React from 'react'
import {ToastConsumer, ToastProvider} from 'vtex.styleguide'

import styles from './styles.css'
import {useCouponInBanner} from "../../context/CouponInBannerContext";


type CouponInBannerMobileProps = {
	banner: string
	couponCode: string,
	showBanner: boolean,
	messageSuccess: string,
	messageError: string,
	linkTo: string
}

export const CouponInBannerMobile = ({
		banner = '',
		showBanner = false,
		couponCode = '',
		messageSuccess = 'Cupom Adicionado Com Sucesso!',
		messageError = 'Houve algum erro ao adicionar o cupom.',
		linkTo = ''
	}: CouponInBannerMobileProps) => {
	const {
		coupon,
		pastCouponIsPresentInTheAvailableCoupons,
		addCouponToCart,
		dispathCouponStatusSuccess,
		dispathCouponStatusError
	} = useCouponInBanner()


	const handleClickBanner = async (showToast: any) => {
		if (!pastCouponIsPresentInTheAvailableCoupons(couponCode)) {
			dispathCouponStatusError(messageError)
			showToast({message: messageError})
			return
		}

		dispathCouponStatusSuccess(messageSuccess)

		addCouponToCart(couponCode)
		showToast({message: messageSuccess})

		if(!!linkTo) {
			window.location.href = linkTo
		}
	}

	const classnameWithStatus = () => {
		if (coupon.status.firstLoad) {
			return styles.CouponInBannerInFirstLoad
		}

		return coupon.status.hasError ?
			styles.CouponInBannerError :
			styles.CouponInBannerSuccess
	}

	return (

		<>
			<ToastProvider positioning="window">
				<ToastConsumer>
					{({showToast}: { showToast: any }) => (
						<div className={`${styles.containerCouponInBannerMobile} ${styles[showBanner ?
							'withBanner' :
							'withoutBanner']} ${classnameWithStatus()}`}>
							{showBanner && (
								<button aria-label={"Adicionar cupom ao carrinho"}>
									<img onClick={() => handleClickBanner(showToast)}
											 className={styles.containerImageMobile} src={banner}
											 alt={"Banner De Cupom"}/>
								</button>
							)}
						</div>
					)}
				</ToastConsumer>
			</ToastProvider>
		</>
	)
}

CouponInBannerMobile.schema = {
	title: "Cupom Banner Mobile"
}

