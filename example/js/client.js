const mockFlags = {};
const subscriptions = {};

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

  getFeatureFlag: name => mockFlags[name]
};
