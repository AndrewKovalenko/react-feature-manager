import PropTypes from 'prop-types';

const featureManagementClientSahpe = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  getFeatureFlag: PropTypes.func.isRequired
});

export default featureManagementClientSahpe;
