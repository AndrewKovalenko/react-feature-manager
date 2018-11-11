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

  componentDidMount() {
    const { name, featureManagementClient } = this.props;
    this.unSubscribeFromFlagUpdates = featureManagementClient.subscribe(name, newFlagValue =>
      this.setState({ flagValue: newFlagValue }));
  }

  componentWillUnmount() {
    if (this.unSubscribeFromFlagUpdates) this.unSubscribeFromFlagUpdates();
  }

  render() {
    return this.state.flagValue ? this.props.children : null;
  }
}

Feature.contextTypes = {
  featureManagementClient: featureManagementClientSahpe
};

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  featureManagementClient: featureManagementClientSahpe.isRequired
};

Feature.childContextTypes = {
  flagValue: PropTypes.string.isRequired
};
