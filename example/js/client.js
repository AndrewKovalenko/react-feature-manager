const mockFlags = {};
const subscriptions = {};

export default {
  setSelected: (name) => {
    mockFlags[name] = true;
    Object.keys(mockFlags).forEach((flag) => {
      if (flag !== name) {
        mockFlags[flag] = false;
      }
    });
  },

  subscribe: (name, callback) => {
    if (subscriptions[name]) {
      subscriptions[name].push(callback);
    }

    subscriptions[name] = [callback];
  },

  getFeatureFlag: name => mockFlags[name]
};
