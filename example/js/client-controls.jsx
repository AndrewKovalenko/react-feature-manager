import React from 'react';
import client from './client';

const flags = ['one', 'two', 'three'];

const ClientControls = () => (
  <form>
    {flags.map(flag => (
      <div key={flag}>
        <input type="radio" name="flag" value={flag} onChange={() => client.setSelected(flag)} />
        <span>{flag}</span>
      </div>
    ))}
  </form>
);

export default ClientControls;
