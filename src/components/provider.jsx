import React from 'react';
import PropTypes from 'prop-types';
import featureManagementClientSahpe from '../client/feature-management-client-shape';

export default class Provider extends React.Component {
  getChildContext() {
    return { featureManagementClient: this.props.client };
  }

  render() {
    return this.props.children;
  }
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  client: featureManagementClientSahpe.isRequired
};

Provider.childContextTypes = {
  featureManagementClient: featureManagementClientSahpe.isRequired,
};
