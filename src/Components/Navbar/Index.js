import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
			<a class="navbar-brand">
				<img src="https://cdn.logo.com/hotlink-ok/logo-social.png" width="50" height="50" alt="" />
			</a>
		</NavMenu>

		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		
		<NavLink to='/task' activeStyle>
			Task
		</NavLink>
		
		<NavLink to='/user' activeStyle>
			User
		</NavLink>

		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
