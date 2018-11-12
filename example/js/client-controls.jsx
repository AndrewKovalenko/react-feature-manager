import React from 'react';
import client from './client';

const flags = ['one', 'two', 'three'];

const ClientControls = () => (
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
);

export default ClientControls;
