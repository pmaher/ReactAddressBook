import React from 'react';
import { AddressList } from './AddressList';

export class HomePage extends React.Component {
	render() {
		return (
			<div className="cover-container text-center">
				<header className="masthead mb-auto">
					<div className="inner">
						<h3>Address Book</h3>
					</div>
				</header>
			
				<AddressList />
			</div>
		)
	}
}