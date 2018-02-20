const React = require('react');
const ReactDOM = require('react-dom');

export class AddressList extends React.Component {
	render() {
		var addresses = this.props.addresses.map(address =>
			<Address key={address.id} address={address}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
					{addresses}
				</tbody>
			</table>
		)
	}
}

export class Address extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.address.firstName}</td>
				<td>{this.props.address.lastName}</td>
				<td>{this.props.address.email}</td>
				<td>{this.props.address.phone}</td>				
			</tr>
		)
	}
}