import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signout } from '../actions/userActions'

const Header = () => {
	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart
	const userSignin = useSelector((state) => state.userSignin)
	const { userInfo } = userSignin

	const dispatch = useDispatch()

	const signoutHandler = () => {
		dispatch(signout())
	}

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
				{userInfo ? (
					<div className='dropdown'>
						<Link className='user-link' to='#'>
							{userInfo.name} <i className='fas fa-caret-down'></i>
						</Link>
						<ul className='dropdown-content'>
							<li>
								<Link className='user-dropdown' to='/profile'>
									User Profile
								</Link>
							</li>
							<li>
								<Link className='user-dropdown' to='/orderhistory'>
									Order History
								</Link>
							</li>
							<li>
								<Link
									className='user-dropdown'
									to='#signout'
									onClick={signoutHandler}
								>
									Sign Out
								</Link>
							</li>
						</ul>
					</div>
				) : (
					<Link className='nav-link' to='/signin'>
						Sign In
					</Link>
				)}
			</div>
		</header>
	)
}

export default Header
