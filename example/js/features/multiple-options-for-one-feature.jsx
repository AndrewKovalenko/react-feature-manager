import React from 'react';
import { Feature, Option } from '../../../build/module';

const MultipleOptionsForSameFeature = () => (
  <section className="column">
    <h3>Selected options:</h3>
    <ul>
      <Feature name="multivalueFlag">
        <Option value="one">
          <span>Show option One</span>
        </Option>
        <Option value="two">
          <span>Show option Two</span>
        </Option>
        <Option value="three">
          <span>Show option Three</span>
        </Option>
      </Feature>
    </ul>
  </section>
);

export default MultipleOptionsForSameFeature;
