import React, { Component } from 'react';

import { SpeakerList }  from '../speaker/speaker-list';
import { EventHeader }  from './event-header';
import { EventContent }  from './event-content';
import { ImageUpload } from '../misc/image-upload'

export class Event extends Component {
  render() {
    return (
        <div id={this.props.name} style={{"display": "block"}}>
            <div className="background">
                <ImageUpload className="background-image-upload" picture="none"/>
            </div>
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

