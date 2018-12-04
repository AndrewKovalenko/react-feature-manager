import React from 'react';
import PropTypes from 'prop-types';
import { mount, shallow } from 'enzyme';
import Feature from '../src/components/feature';
import featureManagementClientSahpe from '../src/client/feature-management-client-shape';

const TEST_NAME = 'testName';
const VALUE_UNDEFINED_TEST_NAME = 'undefinedTestName';
const TEST_VALUE = 'testValue';
const ONE = 1;

const checkFlagValue = jest.fn();
const unsubscribeMock = jest.fn();
const client = {
  subscribe: jest.fn(() => unsubscribeMock),
  getFeatureFlagValue:
   jest.fn(flagName => (flagName === TEST_NAME ? TEST_VALUE : undefined))
};

beforeEach(() => {
  client.subscribe.mockClear();
  client.subscribe.mockClear();
  unsubscribeMock.mockClear();
});

class ValueConsumer extends React.Component {
  componentDidMount() {
    const { flagValue } = this.context;
    checkFlagValue(flagValue);
  }

  render() {
    return null;
  }
}

ValueConsumer.contextTypes = {
  flagValue: PropTypes.any
};

test('should not render any conent if "flagValue" is "undefined"', () => {
  const wrapper = shallow(
    <Feature name={VALUE_UNDEFINED_TEST_NAME} >
      <ValueConsumer />
    </Feature>,
    {
      context: { featureManagementClient: client },
      childContextTypes: { client: featureManagementClientSahpe }
    }
  );

  expect(wrapper.contains(<ValueConsumer />)).toEqual(false);
});

test('should pass the right value to children through context', () => {
  const wrapper = mount(
    <Feature name={TEST_NAME} >
      <ValueConsumer />
    </Feature>,
    {
      context: { featureManagementClient: client },
      childContextTypes: { client: featureManagementClientSahpe }
    }
  );

  expect(wrapper.contains(<ValueConsumer />)).toEqual(true);
  expect(checkFlagValue).toHaveBeenCalledTimes(ONE);
  expect(checkFlagValue).toHaveBeenCalledWith(TEST_VALUE);
});

test('should consume client provided by context', () => {
  const wrapper = shallow(
    <Feature name={TEST_NAME} >
      <div />
    </Feature>,
    {
      context: { featureManagementClient: client },
      childContextTypes: { client: featureManagementClientSahpe }
    }
  );

  expect(client.getFeatureFlagValue).toHaveBeenCalledTimes(ONE);
  expect(client.getFeatureFlagValue).toHaveBeenCalledWith(TEST_NAME);

  expect(client.subscribe).toHaveBeenCalledTimes(ONE);
  expect(client.subscribe).toHaveBeenCalledWith(TEST_NAME, expect.any(Function));

  wrapper.unmount();
  expect(unsubscribeMock).toHaveBeenCalledTimes(ONE);
});
