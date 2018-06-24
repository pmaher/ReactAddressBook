'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import { HomePage } from './HomePage';
import { EditAddressPage } from './EditAddressPage';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {addresses: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/address/list'}).done(response => {
			this.setState({addresses: response.entity});
		});
	}

	render() {
		return (
			<AddressList addresses={this.state.addresses}/>
		)
	}
}

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route exact={true} path="/" component={ HomePage } />
			<Route path="/edit/:addressId" component={ EditAddressPage } />			
		</Switch>
	</HashRouter>,
	document.getElementById('react')
)

