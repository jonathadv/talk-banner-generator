import React, { Component } from 'react';

export class EventContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: 'Lorem Ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows designers to design the form of the content before the content itself has been produced.'
        }
    } 
  render() {
    return (
      <div className="event-content">
        <p className="event-description">
            {this.props.description ? this.props.description : this.state.description}
        </p>
      </div>
    );
  }
}

