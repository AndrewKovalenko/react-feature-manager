import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import Option from '../src/components/option';

const TEST_VALUE = 'testValue';

test('should not render any children if "flagValue" is "undefined"', () => {
  const wrapper = shallow(
    <Option value={TEST_VALUE} >
      <div />
    </Option>,
    {
      context: { flagValue: undefined },
      childContextTypes: { flagValue: PropTypes.any }
    }
  );

  expect(wrapper.contains(<div />)).toEqual(false);
});

test('should render children if "flagValue" is matches to props', () => {
  const wrapper = shallow(
    <Option value={TEST_VALUE} >
      <div />
    </Option>,
    {
      context: { flagValue: TEST_VALUE },
      childContextTypes: { flagValue: PropTypes.any }
    }
  );

  expect(wrapper.contains(<div />)).toEqual(true);
});
