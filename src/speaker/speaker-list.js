import React, { Component } from 'react';
import '../css/layout.css';

export class SpeakerList extends Component {
  render() {
    return (
      <div className="speaker-list">
        {this.props.children}
      </div>
    );
  }
}

