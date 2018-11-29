const subscriptions = {};

export const mockFlags = {
  one: false,
  two: true,
  three: false
};

export default {
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
