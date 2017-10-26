import React, { Component } from 'react';

import { EventTitle }  from '../event/event-title';

export class EventHeader extends Component {
  render() {
    return (
        <div className="event-header" align="center">
            <EventTitle value={this.props.title} color={this.props.color}/>
        </div>
    );
  }
}

