import React from 'react';
import states from './states.json';

export class SelectState extends React.Component {

	constructor(props) {
		super(props);
	    this._handleChange = this._handleChange.bind(this);
	}

	_handleChange(event) {
		this.props.onChange(event);
	}

	render() {
		const selectedState = this.props.selectedState;
		return (
	      <select id={this.props.id} className={this.props.className} onChange={this._handleChange} value={ selectedState }>
	        {states.map(item => <option key={item.abbreviation} value={item.abbreviation}>{item.name}</option>)}
	      </select>
	    );
	  }
}