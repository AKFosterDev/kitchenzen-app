import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
	const cart = useSelector(state => state.cart)
	const { cartItems } = cart

	return (
		<header className='row'>
			<div>
				<Link to='/'>
					<img className='logo' src='../images/logo.png' alt='KitchZen Logo' />
				</Link>
			</div>
			<div>
				<Link className='nav-link' to='/cart'>
					Cart
					{cartItems.length > 0 && (
						<span className='badge'>{cartItems.length}</span>
					)}
				</Link>
				<Link className='nav-link' to='/signin'>
					Sign In
				</Link>
			</div>
		</header>
	)
}

export default Header
