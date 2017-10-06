import React, { Component } from 'react';

export class EventContent extends Component {
    constructor(props) {
        super(props);
        this.defaultDescription = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.';

    } 
  render() {
    return (
      <div className="event-content">
        <p className="event-description">
            {this.props.description ? this.props.description : this.defaultDescription}
        </p>
      </div>
    );
  }
}

