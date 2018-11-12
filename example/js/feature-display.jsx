import React from 'react';
import { Feature, Option } from '../../build/module';

const FeatureDisplay = () => (
  <section>
    <Feature name="one">
      <Option value={true}>
        <span>Feature One</span>
      </Option>
    </Feature>
    <Feature name="two">
      <Option value={true}>
        <span>Feature Two</span>
      </Option>
    </Feature>
    <Feature name="three">
      <Option value={true}>
        <span>Feature Three</span>
      </Option>
    </Feature>
  </section>
);

export default FeatureDisplay;
