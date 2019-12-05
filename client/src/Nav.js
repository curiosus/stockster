import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		const { isAuthenticated, login, logout } = this.props.auth;
		return (
			<nav>
			<ul>
			  <li>
					<button onClick={isAuthenticated() ? logout : login}>
						{isAuthenticated() ? 'Log Out' : 'Log In'}
			    </button>
			  </li>
			</ul>
			</nav>
		);
	}
}

export default Nav;
