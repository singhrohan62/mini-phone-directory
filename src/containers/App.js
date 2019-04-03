import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from '../components/Contact'

export default class App extends Component{
	constructor()
	{
		super();
		this.addContact = this.addContact.bind(this);
		this.handleRemoveContact = this.handleRemoveContact.bind(this);
		this.renderNormal = this.renderNormal.bind(this);
		this.renderForm = this.renderForm.bind(this);
		this.handleBackEvent = this.handleBackEvent.bind(this);
		this.handleAddingContactName = this.handleAddingContactName.bind(this);
		this.handleAddingContactNumber = this.handleAddingContactNumber.bind(this);
		this.handleAddNewContact = this.handleAddNewContact.bind(this);
		this.state = {
			contacts: [
				{id: 1, name: "Rajeev", number: "5546546464"}
			],
			isAdding: false,
			addingContactName:'',
			addingContactNumber:''
		}
	}

	addContact () {
		console.log("adding")
		this.setState({isAdding: true})
	}

	handleAddNewContact () {
		let contact_array = this.state.contacts;
		let length = contact_array.length;
		let newContactNumber = this.state.addingContactNumber;
		let newContactName = this.state.addingContactName;
		let ContactObject = {id: length+1, name : newContactName, number : newContactNumber};
		console.log(ContactObject);
		contact_array.push(ContactObject);
		this.setState({contacts: contact_array, addingContactNumber:'',addingContactName:''});
		this.setState({isAdding: false})
	}

	handleBackEvent () {
		this.setState({isAdding: false})
	}

	handleRemoveContact (i) {
		console.log("removing",i)
		let contact_array = this.state.contacts;
		contact_array.splice(i,1);
		this.setState({contacts: contact_array});
		this.setState({isAdding: false})
	}

	addToContacts (obj) {
		let contact_array = this.state.contacts;
		contact_array.push(obj);
	}

	handleAddingContactName (event) {
		this.setState({addingContactName: event.target.value})
	}

	handleAddingContactNumber (event) {
		this.setState({addingContactNumber: event.target.value})
	}

	renderNormal()
	{
		return(
				<div>
					<h2 className="uk-heading-line uk-text-center uk-text-uppercase"><span>phone directory</span></h2>
					<div className="uk-padding uk-padding-remove-vertical">
					<button className="uk-button uk-button-primary" onClick={this.addContact}>Add</button>
					</div>
					{
						this.state.contacts.map((object,i) => {
							return (
									<div>
									<Contact key={i} index={i} onRemoveContact={this.handleRemoveContact} 
									contact = {object}/>
									</div>
								);
						})
					}
				</div>
			);
	}

	renderForm()
	{
		return(
				<div className="uk-padding">
					<h2 className="uk-heading-line uk-text-center uk-text-uppercase"><span>add subscriber</span></h2>
					<button className="uk-button uk-button-default" onClick={this.handleBackEvent}>BACK</button>
					<br/><br/>
					<label className="uk-padding-small">
						Name:<br/>
						<input type="text" value={this.state.addingContactName} onChange={this.handleAddingContactName}/>
					</label>
					<br/><br/>
					<label className="uk-paddin-small">
						Number:<br/>
						<input type="text" value={this.state.addingContactNumber} onChange={this.handleAddingContactNumber}/>
					</label>
					<br/>
					<h4>Subscriber to be added:</h4>
					<h5>Name: {this.state.addingContactName}</h5>
					<h5>Number: {this.state.addingContactNumber}</h5>
					<br/>
					<button className="uk-button uk-button-primary" onClick={this.handleAddNewContact}>Add</button>
				</div>
			)
	}

	render()
	{
		if(!this.state.isAdding) {
			return this.renderNormal();
		} else {
			return this.renderForm();
		}
	}
}