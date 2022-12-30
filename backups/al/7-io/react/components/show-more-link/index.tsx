import React from 'react'
//@ts-ignore
import useProduct from "vtex.product-context/useProduct";

import styles from './styles.css'


export const ShowMoreLink = () => {
	const ctx = useProduct();

	console.log(ctx)

	// Foi feito essa "gambiarra" por conta que estava pegando um outro link na pagina de wishlist
	const link = ctx?.product?.linkText || ''

	return (
		<a className={styles.containerShowMoreLink} href={`/${link}/p`}>Ver mais detalhes</a>
	)
}