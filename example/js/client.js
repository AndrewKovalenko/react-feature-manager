const subscriptions = {};

export const mockFlags = {
  one: false,
  two: true,
  three: false
};

export default {
  // setValue is not a part of mandatory client API,
  // but just a helper method to simulate feature flag value
  // changes
  setValue: (name, value) => {
    mockFlags[name] = value;

    if (subscriptions[name]) {
      subscriptions[name].forEach(callback => callback(value));
    }
  },

  subscribe: (name, callback) => {
    if (subscriptions[name]) {
      subscriptions[name].push(callback);
    }

    subscriptions[name] = [callback];
    return () => delete subscriptions[name];
  },

  getFeatureFlagValue: name => new Promise((resolve) => {
    setTimeout(() => resolve(mockFlags[name]), 0);
  })
};
