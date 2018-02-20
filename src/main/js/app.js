'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import { AddressList } from './addressList';

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
	<App />,
	document.getElementById('react')
)

