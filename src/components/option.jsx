import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Option extends Component {
  shouldComponentUpdate(_props, _state, newContext) {
    return newContext.flagValue !== this.context.flagValue;
  }

  render() {
    const { value, children } = this.props;
    const { flagValue } = this.context;

    return (value === flagValue ? children : null);
  }
}

Option.contextTypes = {
  flagValue: PropTypes.any
};

Option.propTypes = {
  value: PropTypes.any.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Option;
