import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
	return (
		<Router>
			<div className='grid-container'>
				<header className='row'>
					<div>
						<a href='/'>
							<img
								className='logo'
								src='./images/logo.png'
								alt='KitchZen Logo'
							/>
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
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/' component={HomeScreen} exact />
				</main>
				<footer className='row center'>All Rights Reserved</footer>
			</div>
		</Router>
	)
}

export default App
