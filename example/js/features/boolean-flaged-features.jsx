import React from 'react';
import { Feature, Option } from '../../../build/module';

const OnOffFeaturesDisplay = () => (
  <section className="column">
    <h3>Enabled/disabled features</h3>
    <ul>
      <Feature name="one">
        <Option value>
          <li>
            <span>
              Feature <span className="bold">one</span> enabled
            </span>
          </li>
        </Option>
      </Feature>

      <Feature name="two">
        <Option value>
          <li>
            <span>
              Feature <span className="bold">two</span> enabled
            </span>
          </li>
        </Option>
      </Feature>

      <Feature name="three">
        <Option value>
          <li>
            <span>
              Feature <span className="bold">three</span> enabled
            </span>
          </li>
        </Option>
      </Feature>
    </ul>
  </section>
);

export default OnOffFeaturesDisplay;
