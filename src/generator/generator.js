import React, { Component } from 'react';

import { Event }  from '../event/event';
import { Control }  from '../control/control';

import '../css/layout.css';

export class Generator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Control print="talk">
                    <Event name="talk"
                           bgColor={this.props.bgColor}
                           title={this.props.title ? this.props.title : undefined}
                           titleColor={this.props.titleColor}
                           description={this.props.description}
                           descriptionColor={this.props.descriptionColor}
                           speakers={this.props.speakers}>
                    </Event>
               </Control>
            </div>
        );
  }
}

