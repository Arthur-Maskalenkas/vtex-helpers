import './styles.scss'
import { useEffect } from "react";
import { ScreenSearchProduct } from "../screens/searchProduct/searchProduct.tsx";



export const Application = () => {
		useEffect(() => {
				console.log('carregou2')
		}, [])

		return (
				<div className={'container-main-app'}>
						<ScreenSearchProduct/>
				</div>
		)
}