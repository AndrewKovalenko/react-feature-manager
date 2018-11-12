import 'vertibar';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from '../../build/module';
import simulatedClient from './client';
import ClientControls from './client-controls';
import FeatureDisplay from './feature-display';

const { subscribe, getFeatureFlag } = simulatedClient;

ReactDOM.render(
  <Provider client={{ subscribe, getFeatureFlag }}>
    <ClientControls client={simulatedClient} />
    <FeatureDisplay />
  </Provider>,
  document.getElementById('application-container')
);
