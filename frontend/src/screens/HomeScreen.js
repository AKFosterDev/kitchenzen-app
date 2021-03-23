import React from 'react'
import Product from '../components/Product'
import data from '../data'

const HomeScreen = () => {
	return (
		<div>
			<div className='row center card-container'>
				{data.products.map(product => (
					<Product key={product._id} product={product} />
				))}
			</div>
		</div>
	)
}

export default HomeScreen
