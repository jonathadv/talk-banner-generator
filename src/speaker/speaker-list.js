import React, { Component } from 'react';
import { Speaker }  from '../speaker/speaker';

export class SpeakerList extends Component {
  render() {
    const {
        speakers,
        bioColor,
    } = this.props;

    const isMultiple = speakers.length == 2;
    const speakersComponent = speakers.map(
                (s) => <Speaker id={s.name}
                                picture={s.picture}
                                bio={s.bio ? s.bio : undefined}
                                bioColor={bioColor ? bioColor : undefined}
                                isMultiple={isMultiple}>
                        </Speaker>)

    return (<div className="speaker-list">{speakersComponent}</div>);
  }
}

