import React, { Component } from 'react';

export class EventTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {title: 'Lorem Ipsum'}

    } 
  render() {
    return (
        <p className="event-title">
            {this.props.value ? this.props.value : this.state.title}
        </p>
    );
  }
}

