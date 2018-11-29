import React from 'react';
import client, { mockFlags } from '../client';

const flags = Object.keys(mockFlags);

const BooleanFlagsControls = () => (
  <section className="column">
    <h3>Three different on/off flags:</h3>
    <form>
      {flags.map(flag => (
        <div key={flag}>
          <label htmlFor={flag}>
            <input
              id={flag}
              type="checkbox"
              onChange={(e) => {
                client.setValue(flag, e.target.checked);
              }}
              defaultChecked={mockFlags[flag]}
            />
            {'Show feature'}
            &nbsp;
            <span className="bold">{flag}</span>
          </label>
        </div>
      ))}
    </form>
  </section>
);

export default BooleanFlagsControls;
