import React, { Component } from 'react';
import { ImageUpload } from '../misc/image-upload'

export class Speaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bio : "This is a default Bio",
        }

    }

  render() {
    const {
        bioColor, isMultiple, bio
    } = this.props;

    const styles = {"color" : bioColor}
    const speakerStyle = {}
    if (isMultiple) {
        speakerStyle['max-width'] = '50%';
    }

    return (
      <div className="speaker" style={speakerStyle}>
        <ImageUpload/>
        <div className="speaker-bio" style={styles}>
            {bio ? bio : this.state.bio}
        </div>
      </div>
    );
  }
}

