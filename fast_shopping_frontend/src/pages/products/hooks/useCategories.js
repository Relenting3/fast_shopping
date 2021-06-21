import { useEffect, useState } from 'react'
import { getCategories } from '../../../scripts/data';

export function useCategories () {
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState(null)

	useEffect(() => {
		if(!loading) return
		;(async () =>{
			try {
        let products = await fetch(`${process.env.REACT_APP_API_URL}categories/get_all`).then()
        let response = await products.json()
        setData(prev => prev = getCategories(response.data))
        setLoading(prev => prev = false)
			} catch (error) {
				console.error('Error fetching products',error)
				setError(prev => prev = 'Ups! There was an error while we were trying to retrieve the products')
				setLoading(prev => prev = false)
			}
		})()
	}, [loading]);

	return { error, setLoading, loading, data };
};