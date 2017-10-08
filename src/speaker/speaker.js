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
    return (
      <div className="speaker">
        <ImageUpload/>
        <div className="speaker-bio" style={{"color" : this.props.bioColor}}>
            {this.props.bio ? this.props.bio : this.state.bio}
        </div>
      </div>
    );
  }
}

