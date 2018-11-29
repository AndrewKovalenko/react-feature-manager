import React from 'react';
import client, { mockFlags } from '../client';

const multivalueFlagName = 'multivalueFlag';
const multivalueFlagValues = Object.keys(mockFlags);

const MultipleValuesFlagControls = () => (
  <section className="column">
    <h3>Multiple options for the same feature:</h3>
    <form>
      {multivalueFlagValues.map(flag => (
        <div key={flag}>
          <label htmlFor={`multivalue-control-${flag}`}>
            <input
              id={`multivalue-control-${flag}`}
              type="radio"
              name={multivalueFlagName}
              onChange={() => client.setValue(multivalueFlagName, flag)}
            />
            {'Select option'}
            &nbsp;
            <span className="bold">{flag}</span>
          </label>
        </div>
      ))}
    </form>
  </section>
);

export default MultipleValuesFlagControls;
