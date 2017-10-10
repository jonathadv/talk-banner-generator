import React, { Component } from 'react';

import { Event }  from '../event/event';
import { Control }  from '../control/control';
import { Speaker }  from '../speaker/speaker';

import '../css/layout.css';

export class Generator extends Component {
    constructor(props) {
        super(props);
        this.getSpeakers = () => {
            const {
                speakers,
            } = this.props;

            const isMultiple = speakers.length == 2;

            const speakersComponent = speakers.map(
                        (s) => <Speaker id={s.name}
                                        picture={s.picture}
                                        bio={s.bio ? s.bio : undefined}
                                        isMultiple={isMultiple}>
                               </Speaker>)

            return (<div className="speaker-list" style={{"color": this.props.descriptionColor}}>{speakersComponent}</div>);
        }
    }

    render() {
        return (
            <div>
                <Control print="talk">
                    <Event name="talk"
                           bgColor={this.props.bgColor}
                           title={this.props.title}
                           titleColor={this.props.titleColor}
                           description={this.props.description}
                           descriptionColor={this.props.descriptionColor}>
                        {this.getSpeakers()}
                    </Event>
               </Control>
            </div>
        );
  }
}

