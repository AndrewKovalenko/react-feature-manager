import React from 'react';
import { Feature, Option } from '../../../build/module';

const MultipleOptionsForSameFeature = () => (
  <section className="column">
    <h3>Selected options:</h3>
    <ul>
      <Feature name="multivalueFlag">
        <Option value="one">
          <span>
            Feature <span className="bold">one</span> enabled
          </span>
        </Option>
        <Option value="two">
          <span>
            Feature <span className="bold">two</span> enabled
          </span>
        </Option>
        <Option value="three">
          <span>
            Feature <span className="bold">three</span> enabled
          </span>
        </Option>
      </Feature>
    </ul>
  </section>
);

export default MultipleOptionsForSameFeature;
