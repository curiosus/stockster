import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
	render() {
		const { isAuthenticated, login } = this.props.auth;
		return (
			<>
				<h1>Stockster</h1>
			</>
		);

	}
}

export default Landing;

