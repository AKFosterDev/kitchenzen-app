import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingAddressScreen from './screens/ShippingAddressScreen'
import SigninScreen from './screens/SigninScreen'
import PaymentMethodScreen from './screens/PaymentMethodScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import OrderHistoryScreen from './screens/OrderHistoryScreen'
import ProfileScreen from './screens/ProfileScreen'

function App() {
	return (
		<Router>
			<div className='grid-container'>
				<Header />
				<main>
					<Route path='/cart/:id?' component={CartScreen} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/signin' component={SigninScreen} />
					<Route path='/register' component={RegisterScreen} />
					<Route path='/shipping' component={ShippingAddressScreen} />
					<Route path='/payment' component={PaymentMethodScreen} />
					<Route path='/placeorder' component={PlaceOrderScreen} />
					<Route path='/order/:id' component={OrderScreen} />
					<Route path='/orderhistory' component={OrderHistoryScreen} />
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/' component={HomeScreen} exact />
				</main>
				<Footer />
			</div>
		</Router>
	)
}

export default App
