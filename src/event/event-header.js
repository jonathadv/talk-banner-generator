import React, { Component } from 'react';

import { EventTitle }  from '../event/event-title';

export class EventHeader extends Component {
  render() {
    return (
        <div className="event-header">
            <EventTitle value={this.props.title}/>
        </div>
    );
  }
}

