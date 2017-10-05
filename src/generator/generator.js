import React, { Component } from 'react';
import '../css/layout.css';

import { Event }  from '../event/event';
import { Control }  from '../control/control';
import { Speaker }  from '../speaker/speaker';

export class Generator extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div>
                <Control>
                    <Event>
                        <Speaker picture="" bio=""></Speaker>
                        <Speaker picture="" bio=""></Speaker>
                    </Event>
               </Control>
            </div>
        );
  }
}

