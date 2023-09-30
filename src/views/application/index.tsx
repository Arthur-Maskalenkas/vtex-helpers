import './styles.scss'
import { useEffect } from "react";
import { ScreenSearchProductWrapper } from "../screens/searchProduct/searchProduct.tsx";



export const Application = () => {
		useEffect(() => {
				console.log('olaaas')
		}, [])

		return (
				<div className={'container-main-app'}>
						<ScreenSearchProductWrapper/>
				</div>
		)
}