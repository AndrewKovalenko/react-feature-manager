import React from 'react';
import { Feature, Option } from '../../build/module';

const FeatureDisplay = () => (
  <section>
    <Feature name="one">
      <Option value={true}>Feature One</Option>
    </Feature>
    <Feature name="two">
      <Option value={true}>Feature Two</Option>
    </Feature>
    <Feature name="three">
      <Option value={true}>Feature Three</Option>
    </Feature>
  </section>
);

export default FeatureDisplay;
