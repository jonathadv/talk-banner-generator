import React, { Component } from 'react';
import '../css/layout.css';

export class EventTitle extends Component {
    constructor(props) {
        super(props);
        this.defaultTitle = 'Lorem Ipsum';

    } 
  render() {
    return (
        <p className="event-title">
            {this.props.value ? this.props.value : this.defaultTitle}
        </p>
    );
  }
}

