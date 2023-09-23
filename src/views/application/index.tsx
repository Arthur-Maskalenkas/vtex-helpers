import './styles.scss'
import { useEffect } from "react";
import { AllCategories } from "../screens/allCategories/allCategories.tsx";



export const Application = () => {
		useEffect(() => {
				console.log('carregou2')
		}, [])

		return (
					<div className={'container-main-app'}>
							<AllCategories/>
					</div>
		)
}