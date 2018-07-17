import React, { Children } from 'react';
import PropTypes from 'prop-types';
import featureManagementClientSahpe from '../client/feature-management-client-shape';

export default class Provider extends React.Component {
  getChildContext() {
    return { featureManagementClient: this.featureManagementClient };
  }

  render() {
    return Children.only(this.props.children);
  }
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

Provider.childContextTypes = {
  featureManagementClient: featureManagementClientSahpe.isRequired,
};
