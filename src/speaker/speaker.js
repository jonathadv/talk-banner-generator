import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageUpload } from '../misc/image-upload';


export class Speaker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id,
            bio,
            bioColor,
            isMultiple,
        } = this.props;

        const styles = {"color" : bioColor}
        const speakerStyle = {}
        if (isMultiple) {
            speakerStyle["max-width"] = "50%";
        }

        return (
        <div className="speaker" id={id} style={speakerStyle}>
            <ImageUpload/>
            <div className="speaker-bio" style={styles}>
                {bio}
            </div>
        </div>
        );
    }
}

Speaker.propTypes = {
    bio: PropTypes.string,
    bioColor: PropTypes.string,
    isMultiple: PropTypes.bool,
}

Speaker.defaultProps = {
    bio: "This is a default bio description. Please be more creative than that!",
    bioColor: "#000000",
    isMultiple: false,
}

