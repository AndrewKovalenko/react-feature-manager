import React from 'react';
import { shallow } from 'enzyme';
import Provider from '../src/components/provider';

test('should pass', () => {
  const wrapper = shallow(<Provider />);
  expect(wrapper).toBeDefined();
});
