import React from 'react';
import PropTypes from 'prop-types';
import featureManagementClientSahpe from '../client/feature-management-client-shape';

export default class Feature extends React.Component {
  static getDerivedStateFromProps({ name, featureManagementClient }) {
    const flagValue = featureManagementClient.getFeatureFlag(name);

    return {
      flagValue
    };
  }

  getChildContext() {
    return { flagValue: this.state.flagValue };
  }

  render() {
    return this.state.flagValue ?
      this.props.children :
      null;
  }
}

Feature.contextTypes = {
  featureManagementClient: featureManagementClientSahpe
};

Feature.propTypes = {
  // NOTE: in fact "name" is used in getDerivedStateFromProps but eslint doesn't see it
  name: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

Feature.childContextTypes = {
  flagValue: PropTypes.string.isRequired,
};
