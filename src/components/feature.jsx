import React from 'react';
import PropTypes from 'prop-types';
import featureManagementClientSahpe from '../client/feature-management-client-shape';

export default class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    return { flagValue: this.state.flagValue };
  }

  componentWillMount() {
    const { featureManagementClient } = this.context;
    const getFlagResult = featureManagementClient.getFeatureFlagValue(this.props.name);

    if (getFlagResult instanceof Promise) {
      getFlagResult
        .then((flagValue) => {
          this.setState({ flagValue });
        })
        .catch(error => console.error(error));
    } else {
      this.setState({ flagValue: getFlagResult });
    }
  }

  componentDidMount() {
    const { featureManagementClient } = this.context;
    this.unSubscribeFromFlagUpdates = featureManagementClient.subscribe(
      this.props.name,
      newFlagValue => this.setState({ flagValue: newFlagValue })
    );
  }

  componentWillUnmount() {
    if (this.unSubscribeFromFlagUpdates) this.unSubscribeFromFlagUpdates();
  }

  render() {
    return typeof this.state.flagValue !== 'undefined' ? this.props.children : null;
  }
}

Feature.contextTypes = {
  featureManagementClient: featureManagementClientSahpe
};

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired
};

Feature.childContextTypes = {
  flagValue: PropTypes.any
};
