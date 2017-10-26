import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class EventContent extends Component {
    constructor(props) {
        super(props);

         this.getText = (text) => {
            const htmlText = text.split("\n").map((line) => {
                if (line.length === 0) {
                    return <br/>
                }
                return <p>{line}</p>
            });

            return htmlText;
        }
    }

    render() {
        const {
            description,
            descriptionColor
        } = this.props;
        
        let value = description;   

        const style = {"color" : descriptionColor};
        value = this.getText(description);

        return (
            <div className="event-content">
                <p className="event-description" style={style}>
                    {value}
                </p>
            </div>
        );
  }
}

EventContent.propTypes = {
    description: PropTypes.string,
    descriptionColor: PropTypes.string,
}

EventContent.defaultProps = {
    description: 'Lorem Ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows designers to design the form of the content before the content itself has been produced.',
    descriptionColor: "#000000",
}
