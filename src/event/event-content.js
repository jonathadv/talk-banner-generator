import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class EventContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            description,
            descriptionColor
        } = this.props;

        const style = {"color" : descriptionColor};

        return (
            <div className="event-content">
                <p className="event-description" style={style}>
                    {description}
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

