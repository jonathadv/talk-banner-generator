import React, { Component } from 'react';
import '../css/layout.css';

import { SpeakerList }  from '../speaker/speaker-list';
import { EventHeader }  from './event-header';
import { EventContent }  from './event-content';


export class Event extends Component {
  render() {
    return (
        <div style={{"display": "block"}}>
            <div className="container">
                <EventHeader title={this.props.title}/>
                <EventContent description={this.props.description}/>
                <hr className="line"/>
                <SpeakerList>{this.props.children}</SpeakerList>
            </div>
        </div>
    );
  }
}
