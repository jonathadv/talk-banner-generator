import React, { Component } from 'react';

import { Event }  from '../event/event';
import { Control }  from '../control/control';
import { Speaker }  from '../speaker/speaker';

import '../css/layout.css';

export class Generator extends Component {
    constructor(props) {
        super(props);
        this.getSpeakers = () => {
            let speakers = [];
            speakers = this.props.speakers.map(
                    (s) => <Speaker id={s.name} picture={s.picture} bio={s.bio}></Speaker>
                    )
            return (<div style={{"color": this.props.descriptionColor}}>{speakers}</div>);
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

