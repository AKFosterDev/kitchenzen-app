import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import SigninScreen from './screens/SigninScreen'

function App() {
	return (
		<Router>
			<div className='grid-container'>
				<Header />
				<main>
					<Route path='/cart/:id?' component={CartScreen} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/signin' component={SigninScreen} />
					<Route path='/' component={HomeScreen} exact />
				</main>
				<Footer />
			</div>
		</Router>
	)
}

export default App
