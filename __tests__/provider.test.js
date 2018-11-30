import React from 'react';
import { mount } from 'enzyme';
import Provider from '../src/components/provider';
import featureManagementClientSahpe from '../src/client/feature-management-client-shape';

const client = {
  subscribe: jest.fn(),
  getFeatureFlagValue: jest.fn()
};

class ClientConsumer extends React.Component {
  componentWillMount() {
    const { featureManagementClient } = this.context;
    this.setState({ featureManagementClient });
  }

  render() {
    return (
      <React.Fragment>
        {Object.keys(this.state.featureManagementClient).map(propertyName => (
          <div key={propertyName}>{propertyName}</div>
        ))}
      </React.Fragment>
    );
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
  expect(wrapper.find(<div>subscribe</div>)).toBeDefined();
  expect(wrapper.find(<div>getFeatureFlagValue</div>)).toBeDefined();
});
