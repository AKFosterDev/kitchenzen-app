import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './layout/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
	return (
		<Router>
			<div className='grid-container'>
				<Header />
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
