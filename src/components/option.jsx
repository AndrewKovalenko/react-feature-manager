import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ value, flagValue, children }) =>
  (value === flagValue ? children : null);

Option.contextTypes = {
  flagValue: PropTypes.string.isRequired
};

Option.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Option;
