import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SpeakerList }  from '../speaker/speaker-list';
import { EventHeader }  from './event-header';
import { EventContent }  from './event-content';
import { ImageUpload } from '../misc/image-upload'

export class Event extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            name,
            bgColor,
            title,
            titleColor,
            description,
            descriptionColor,
            children,
            speakers,
        } = this.props;

        const backgroundStyle = {"background-color": bgColor};
        const isHidden =(bgColor && bgColor !== '#ffffff') ? false : true;

        return (
            <div id={this.props.name} style={{"display": "block"}}>
                <div className="background-color" style={backgroundStyle} hidden={isHidden}/>
                <div className="background">
                    <ImageUpload className="background-image-upload" picture="none"/>
                </div>
                <div className="container">
                    <EventHeader title={title ? title : undefined} color={titleColor ? titleColor : undefined}/>
                    <EventContent description={description ? description : undefined} descriptionColor={descriptionColor ? descriptionColor : undefined}/>
                    <hr className="line"/>
                    <SpeakerList speakers={speakers} bioColor={descriptionColor ? descriptionColor : undefined}/>
                </div>
            </div>
        );
    }
}

