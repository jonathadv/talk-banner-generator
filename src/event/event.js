import React, { Component } from 'react';

import { SpeakerList }  from '../speaker/speaker-list';
import { EventHeader }  from './event-header';
import { EventContent }  from './event-content';
import { ImageUpload } from '../misc/image-upload'

export class Event extends Component {
  render() {
    return (
        <div id={this.props.name} style={{"display": "block"}}>
            <div className="background-color" style={{"background-color": this.props.bgColor}}
                hidden={(this.props.bgColor && this.props.bgColor !== '#ffffff') ? false : true}/>
            <div className="background">
                <ImageUpload className="background-image-upload" picture="none"/>
            </div>

            <div className="container">
                <EventHeader title={this.props.title ? this.props.title : undefined} color={this.props.titleColor ? this.props.titleColor : undefined}/>
                <EventContent description={this.props.description} color={this.props.descriptionColor}/>
                <hr className="line"/>
                <SpeakerList style={{"color": this.props.descriptionColor}}> {this.props.children} </SpeakerList>
            </div>
        </div>
    );
  }
}

