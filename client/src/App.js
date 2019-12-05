import React, { Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Landing from './Landing';
import Profile from './Profile';
import Portfolio from './Portfolio';
import Nav from './Nav';
import Auth from './Auth/Auth';
import Callback from './Callback';
import './App.css';


class App extends Component {


	constructor(props) {
		super(props);
		this.auth = new Auth(this.props.history);
	}

	render() {
		return (
			<>
				<Nav auth={this.auth} />
				<div className='body'>
					<Route path='/callback' render={ props => <Callback auth={this.auth} {...props} /> } />
					<Route path='/' render={ props => this.auth.isAuthenticated() ? <Portfolio auth={this.auth} {...props}/> : <Landing auth={this.auth} {...props} /> } />
				</div>
			</>
		);
	}
}

export default App;
