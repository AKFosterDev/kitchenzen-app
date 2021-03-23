import React from 'react'

const Header = () => {
	return (
		<header className='row'>
			<div>
				<a href='/'>
					<img className='logo' src='../images/logo.png' alt='KitchZen Logo' />
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
	)
}

export default Header
