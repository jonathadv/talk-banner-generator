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
            return (<div>{speakers}</div>);
        }
    } 

    render() {
        return (
            <div>
                <Control print="talk">
                    <Event bgColor={this.props.bgColor} name="talk" title={this.props.title} description={this.props.description}>
                        {this.getSpeakers()}
                    </Event>
               </Control>
            </div>
        );
  }
}

