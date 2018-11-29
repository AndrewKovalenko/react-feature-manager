import React from 'react';
import client, { mockFlags } from './client';

const flags = Object.keys(mockFlags);
const multivalueFlagName = 'multivalueFlag';
const multivalueFlagValues = Object.keys(mockFlags);

const ClientControls = () => (
  <div>
    <section>
      <h3>Boolean flags</h3>
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
              {flag}
            </label>
          </div>
        ))}
      </form>
    </section>
    <section>
      <h3>Multi-value flag</h3>
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
              {flag}
            </label>
          </div>
        ))}
      </form>
    </section>
  </div>
);

export default ClientControls;
