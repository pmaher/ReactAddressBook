import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export class AddressList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			addresses: []
		}
	}
	componentDidMount() {
		//TODO: this REST endpoint should probably just be /api/address
		axios.get('/api/address').then( (response) => {
			this.setState( Object.assign({}, { addresses: response.data }) );
		});
	}
	render() {
		const addresses = this.state.addresses;
		let addressRows = '';
		if(addresses.length) {
			addressRows = this.state.addresses.map(address =>
				<Address key={address.id} address={address}/>
			);			
		} else {
			addressRows = <tr><td colSpan="5">No Results Found...</td></tr>
		}

		return (
			<table className="table table-striped table-bordered table-hover">
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th></th>
					</tr>
					{ addressRows }
				</tbody>
			</table>
		)
	}
}

export class Address extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: this.props.address
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ address: nextProps.address });
	}
	render() {
		const address = this.state.address;
		return (
			<tr>
				<td>{ address.firstName }</td>
				<td>{ address.lastName }</td>
				<td>{ address.email }</td>
				<td>{ address.phone }</td>
				<td><EditAddressButton to={ "/edit/"+address.id } /></td>
			</tr>
		)
	}
}

const EditAddressButton = withRouter( (props) => (
		<button className="btn btn-info" onClick={ ()=> props.history.push(props.to)}>Edit</button>
	)
);



