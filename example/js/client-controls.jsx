import React from 'react';
import client from './client';

const flags = ['one', 'two', 'three'];
const multivalueFlagName = 'multivalueFlag';
const multivalueFlagValues = ['one', 'two', 'three'];

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
                onChange={e => client.setValue(flag, e.target.checked)}
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
            <label htmlFor={flag}>
              <input
                id={flag}
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
