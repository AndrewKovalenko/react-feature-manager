import PropTypes from 'prop-types';

const featureManagementClientSahpe = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  getFeatureFlagValue: PropTypes.func.isRequired
});

export default featureManagementClientSahpe;
