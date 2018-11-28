import React from 'react';
import { Feature, Option } from '../../build/module';

const FeatureDisplay = () => (
  <section>
    <ul>
      <Feature name="one">
        <Option value>
          <li>
            <span>Feature One</span>
          </li>
        </Option>
      </Feature>

      <Feature name="two">
        <Option value>
          <li>
            <span>Feature Two</span>
          </li>
        </Option>
      </Feature>

      <Feature name="three">
        <Option value>
          <li>
            <span>Feature Three</span>
          </li>
        </Option>
      </Feature>
    </ul>
    <ul>
      <Feature name="multivalueFlag">
        <Option value="one">
          <span>Multivalue feature one</span>
        </Option>
        <Option value="two">
          <span>Multivalue feature two</span>
        </Option>
        <Option value="three">
          <span>Multivalue feature three</span>
        </Option>
      </Feature>
    </ul>
  </section>
);

export default FeatureDisplay;
