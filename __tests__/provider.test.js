import React from 'react';
import { mount } from 'enzyme';
import Provider from '../src/components/provider';
import featureManagementClientSahpe from '../src/client/feature-management-client-shape';

const client = {
  subscribe: jest.fn(),
  getFeatureFlagValue: jest.fn()
};

const ONE = 1;

class ClientConsumer extends React.Component {
  componentDidMount() {
    const { featureManagementClient } = this.context;
    featureManagementClient.subscribe();
    featureManagementClient.getFeatureFlagValue();
  }

  render() {
    return null;
  }
}

ClientConsumer.contextTypes = {
  featureManagementClient: featureManagementClientSahpe
};

test('should render Providers children and pass client', () => {
  const wrapper = mount(
    <Provider client={client}>
      <ClientConsumer />
    </Provider>
  );

  expect(wrapper.contains(<ClientConsumer />)).toEqual(true);
  expect(client.subscribe).toHaveBeenCalledTimes(ONE);
  expect(client.getFeatureFlagValue).toHaveBeenCalledTimes(ONE);
});
