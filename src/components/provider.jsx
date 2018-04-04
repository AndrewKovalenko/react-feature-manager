import { Component, Children } from 'react';
import PropTypes from 'prop-types';

const subscriptionsStructure = PropTypes.shape({
  trySubscribe: PropTypes.func.isRequired,
  tryUnsubscribe: PropTypes.func.isRequired,
  notifyNestedSubs: PropTypes.func.isRequired,
  isSubscribed: PropTypes.func.isRequired,
});

const storeStructure = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
});

const clientStructure = PropTypes.shape({
  getFlag: PropTypes.func.isRequired,
  getAllFlags: PropTypes.func.isRequired,
  on: PropTypes.func.isRequired
});

export function createProvider(storePropName = 'store', subscribePropName) {
  const subscriptionPropertyName = subscribePropName || `${storePropName}Subscription`;

  class Provider extends Component {
    constructor(props, context) {
      super(props, context);
      const { store, client } = props;
      this[storePropName] = store;
      this.client = client;
    }

    getChildContext() {
      return {
        featureManagementClient: this.client,
        [storePropName]: this[storePropName],
        [subscriptionPropertyName]: null
      };
    }
    render() {
      return Children.only(this.props.children);
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this[storePropName] !== nextProps.store) {
        console.warn('Redux store provided by provider is reassigned');
      }

      if (nextProps.featureManagementClient &&
        this.featureManagementClient !== nextProps.featureManagementClient) {
        console.warn('Feature Management Client provided by provider is reassigned');
      }
    };
  }

  Provider.propTypes = {
    store: storeStructure.isRequired,
    children: PropTypes.element.isRequired,
    client: clientStructure.isRequired
  };

  Provider.childContextTypes = {
    [storePropName]: storeStructure.isRequired,
    [subscriptionPropertyName]: subscriptionsStructure,
    featureManagementClient: clientStructure.isRequired
  };

  return Provider;
}

export default createProvider();
