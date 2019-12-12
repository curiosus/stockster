import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import DataTable from './DataTable';


const StockList = (props) => (
	<div>
	  	<div >
			  <div style={{ display: 'inline', marginRight: '8rem', marginLeft: '4rem' } }>Symbol</div>
			  <div style={{ display: 'inline', marginRight: '8rem' } }>Name</div>
				<div style={{ display: 'inline', marginRight: '8rem'} }>Price</div>
			</div>

	<div>
		{props.stocks.map(stock => <Stock key={stock.symbol} {...stock} />)}
	</div>
	</div>
);

class Stock extends Component {
	render() {
		const stock = this.props;
		return (
	  	<div>
			  <div style={{ display: 'inline', marginRight: '8rem', marginLeft: '4rem' } }>{stock.symbol}</div>
			  <div style={{ display: 'inline', marginRight: '8rem' } }>{stock.shortName}</div>
				<div style={{ display: 'inline', marginRight: '8rem'} }>{stock.regularMarketPrice}</div>
			</div>

		);
	}
}

class Form extends Component {
	state = {symbol: ''};

	handleSubmit = async (event) => {
		event.preventDefault();
		const response = await axios.get(`http://localhost:4242/stock?sym=${this.state.symbol}`);
		console.log(response.data.quoteResponse.result[0].shortName);
		this.props.onSubmit(response.data.quoteResponse.result[0]);
		this.setState({symbol: ''});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.symbol}
							 onChange={event => this.setState({symbol: event.target.value})}
							 placeholder='Enter Symbol'
							 required
				/>

								 <button> Add Stock</button>
			</form>
		);

	}

}

class Portfolio extends Component {


	constructor(props) {
		super(props);
		this.state = {
			stocks: [],
		};
	}

	addNewStock = (stockData) => {
		this.setState(prevState => ({
			stocks: [...prevState.stocks, stockData]
		}))
	};

	render() {
		return (
			<>
					<h1>
						<div style={{ textAlign: 'center'  }}>{this.props.title}</div>
			    </h1>
					<Form onSubmit={this.addNewStock} />
			  	<div>
						<StockList stocks={this.state.stocks} />
			  	</div>
					<DataTable />
			</>
		);
	}
}

export default Portfolio;
