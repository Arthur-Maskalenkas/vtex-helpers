import { useEffect, useState } from 'react'



export const useDebounce = (value: any, delay: any) => {
		const [ debouncedValue, setDebouncedValue ] = useState(value)

		useEffect(() => {
				const timer = setTimeout(() => {
						setDebouncedValue(value)
				}, delay)

				return () => {
						clearTimeout(timer)
				}
		}, [ value, delay ])

		return debouncedValue
}