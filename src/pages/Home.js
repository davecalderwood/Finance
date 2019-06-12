import React, { Component } from 'react';

export default class Home extends Component {
    constructor() {
		super();
		this.state = {
			display: true,
		};
	}	
	
	toggle() {
		this.setState({
			display: !this.state.display
		});
	}
		
	render() {		
		return (
			<div>
				<button onClick={this.toggle.bind(this)}>Toggle</button>
			</div>
		)
	}
}