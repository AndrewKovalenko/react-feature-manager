import { Component, Children } from 'react'
import PropTypes from 'prop-types'

const subscriptionsStructure = PropTypes.shape({
  trySubscribe: PropTypes.func.isRequired,
  tryUnsubscribe: PropTypes.func.isRequired,
  notifyNestedSubs: PropTypes.func.isRequired,
  isSubscribed: PropTypes.func.isRequired,
})

const storeStructure = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
})

export function createProvider(storePropName = 'store', subscribePropName) {
  const subscriptionPropertyName = subscribePropName || `${storePropName}Subscription`

  class Provider extends Component {
    getChildContext() {
      return {
        launchDarklyConfig: this.launchDarklyConfig
        [storePropName]: this[storePropName], 
        [subscriptionPropertyName]: null 
      }
    }

    constructor(props, context) {
      super(props, context)
      this[storePropName] = props.store;
      this.launchDarklyConfig = props.launchDarklyConfig
    }

    render() {
      return Children.only(this.props.children)
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storePropName] !== nextProps.store) {
        console.warn('Redux store provided by provider is reassigned');
      }

      if (nextProps.launchDarklyConfig && this.launchDarklyConfig !== nextProps.launchDarklyConfig) {
        console.warn('LaunchDarkly config provided by provider is reassigned');
      }
    }
  }

  Provider.propTypes = {
    store: storeShape.isRequired,
    children: PropTypes.element.isRequired,
    launchDarklyConfig: PropTypes.object.isRequired
  };

  Provider.childContextTypes = {
    [storePropName]: storeShape.isRequired,
    [subscriptionPropertyName]: subscriptionShape,
    launchDarklyConfig: PropTypes.object.isRequired
  };

  return Provider
}

export default createProvider()
