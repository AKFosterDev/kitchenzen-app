import React from 'react'
import Product from './components/Product'
import data from './data'

function App() {
	return (
		<div className='grid-container'>
			<header className='row'>
				<div>
					<a href='/'>
						<img className='logo' src='./images/logo.png' alt='KitchZen Logo' />
					</a>
				</div>
				<div>
					<a className='nav-link' href='/cart'>
						Cart
					</a>
					<a className='nav-link' href='/signin'>
						Sign In
					</a>
				</div>
			</header>
			<main>
				<div className='row center card-container'>
					{data.products.map(product => (
						<Product key={product._id} product={product} />
					))}
				</div>
			</main>
			<footer className='row center'>All Rights Reserved</footer>
		</div>
	)
}

export default App
