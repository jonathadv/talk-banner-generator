import React, { Component } from 'react';

export class EventContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: 'Lorem Ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows designers to design the form of the content before the content itself has been produced.'
        }

        this.getText = () => {
            if (! this.props.description || this.props.description.length < 1){
                return this.state.description
            }

            const text = this.props.description.split("\n").map((line) => {
                if (line.length === 0) {
                    return <br/>
                }
                return <p>{line}</p>
            });

            return text;
        }
    }

  render() {
    return (
      <div className="event-content">
        <div className="event-description">
            {this.getText()}
        </div>
      </div>
    );
  }
}

