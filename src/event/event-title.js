import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class EventTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            value,
            color,
        } = this.props;

        const style = {"color": color}

    return (
        <h1 className="event-title" style={style}>
            {value}
        </h1>
    );
  }
}

EventTitle.propTypes = {
    value: PropTypes.string,
    color: PropTypes.string,
}

EventTitle.defaultProps = {
    value: "Lorem Ipsum",
    color: "#000000",
}

