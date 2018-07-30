import React from 'react';
import axios from 'axios';
import { SelectState } from './SelectState';
import { withRouter } from 'react-router-dom';

export class EditAddressPage extends React.Component {
	render() {

		return (
			<div className="cover-container">
				<header className="masthead mb-auto text-center">
					<div className="inner">
						<h3>Edit Address</h3>
					</div>
				</header>
			
				<EditAddressWithRouter addressId={ this.props.match.params.addressId }/>

			</div>		
		)
	}
}

export class EditAddress extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {}
		this.handleAddressElementChange = this.handleAddressElementChange.bind(this);
		this.saveAddress = this.saveAddress.bind(this);
	}
	
	componentDidMount() {
		//this is the param passed from the url
		const addressId = this.props.addressId;
		axios.get('/api/address/' + addressId).then((response) => {
			this.setState({
				address: response.data
			})
		});
	}
	
	
    handleAddressElementChange(e) {
    	const newAddress = Object.assign(this.state.address, {[e.target.id]: e.target.value});
    	console.log(newAddress);
        this.setState({
        	address: newAddress
        });
    }
    
    saveAddress() {
		axios.put('/api/address/' + this.state.address.id, this.state.address).then((response) => {
			this.props.history.goBack();
		});
    }
	
	render() {
		const address = this.state.address;
		if(address) {
			return (
				<div className="container">
					<div className="col-12 col-md-9">
						<fieldset className="form-group">
							<div className="form-group">
						    	<label htmlFor="firstName">First Name:</label>
						    	<input id="firstName" type="text" className="form-control" placeholder="First Name" 
						    			value={ this.state.address.firstName } 
						    			onChange={ this.handleAddressElementChange } />
						    </div>
							<div className="form-group">
						    	<label htmlFor="firstName">Last Name:</label>
						    	<input id="lastName" type="text" className="form-control" placeholder="Last Name" 
						    		value={ address.lastName } 
						    		onChange={ this.handleAddressElementChange }/>
						    </div>
							<div className="form-group">
						    	<label htmlFor="address">Address:</label>
						    	<input id="address" type="text" className="form-control" placeholder="Address" 
						    		value={ address.address }
						    		onChange={ this.handleAddressElementChange } />
						    </div>
							<div className="form-group">
						    	<label htmlFor="address2">Address 2:</label>
						    	<input id="address2" type="text" className="form-control" placeholder="Address 2" 
						    		value={ address.address2 } 
						    		onChange={ this.handleAddressElementChange } />
						    </div>
							<div className="form-group">
						    	<label htmlFor="city">City:</label>
						    	<input id="city" type="text" className="form-control" placeholder="City" 
						    		value={ address.city }
						    		onChange={ this.handleAddressElementChange } />
						    </div>
							<div className="form-group">
						    	<label htmlFor="state">State:</label>
						    	<SelectState id="state" className="form-control" placeholder="State" 
						    		selectedState={ address.state }
						    		onChange={ this.handleAddressElementChange } />
						    </div>
							<div className="form-group">
						    	<label htmlFor="zip">Zip:</label>
						    	<input id="zipcode" type="text" className="form-control" placeholder="Zip" 
						    		value={ address.zipcode } 
						    		onChange={ this.handleAddressElementChange } />
						    </div>
							<div className="form-group">
						    	<label htmlFor="email">Email:</label>
						    	<input id="email" type="text" className="form-control" placeholder="Email" 
						    		value={ address.email }
						    		onChange={ this.handleAddressElementChange } />
						    </div>
							<div className="form-group">
						    	<label htmlFor="phone">Phone:</label>
						    	<input id="phone" type="text" className="form-control" placeholder="Phone" 
						    		value={ address.phone } 
						    		onChange={ this.handleAddressElementChange } />
						    </div>
						</fieldset>
						<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
							<CancelButton>Cancel</CancelButton>
							<SaveAddressButton saveAddress={ this.saveAddress } />
						</div>
					</div>
				</div>
				)
		} else {
			return (
				<div className="container">	
					No Addresses Found.  Please go back to select an existing address or create a new one.
					<CancelButton >Back</CancelButton>
				</div>
			)
		}
	}
}

const EditAddressWithRouter = withRouter(EditAddress);

const CancelButton = withRouter( (props) => (
		<button className="btn btn-info btn-space" onClick={ ()=> props.history.goBack() }>{ props.children }</button>
	)
);

const SaveAddressButton = (props) => (
	<button className="btn btn-primary btn-space" onClick={ props.saveAddress }>Save</button>
);