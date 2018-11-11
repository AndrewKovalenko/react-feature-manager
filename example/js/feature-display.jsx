import React from 'react';
import { Feature, Option } from '../../build/module';

const FeatureDisplay = () => (
  <section>
    <Feature name="one">
      <Option flagValue>Feature One</Option>
    </Feature>
    <Feature name="two">
      <Option flagValue>Feature Two</Option>
    </Feature>
    <Feature name="three">
      <Option flagValue>Feature Three</Option>
    </Feature>
  </section>
);

export default FeatureDisplay;
