import React, {Component} from 'react';

export default class Contact extends Component{
	constructor()
	{
		super();
		this.removeContact = this.removeContact.bind(this);
	}


	removeContact () {
		console.log("removing")
		this.props.onRemoveContact(this.props.index)
	}


	render()
	{
		return (
				<div className="uk-flex uk-padding-large uk-padding-remove-bottom contact-list">
				<div className="uk-description-list uk-description-list-divider">
					<h4 className="uk-text-bold contact-name">{this.props.contact.name}</h4>
					<h5 className="contact-number">{this.props.contact.number}</h5>
				</div>
					<button className="uk-button uk-button-danger remove-button" onClick={this.removeContact}>Remove</button>
				</div>
			)
	}
}

