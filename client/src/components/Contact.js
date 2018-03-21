import React from 'react';

class Contact extends React.Component {

  componentDidMount() {
    this.props.getContact(this.props.match.params.contactId);
  }

  render() {
    return (
      <div>
        <h1>Name: {this.props.contact.name}</h1>
        <h1>Occupation: {this.props.contact.occupation}</h1>
        <h1>Avatar: {this.props.contact.avatar}</h1>
      </div>
    )
  }
}

export default Contact;