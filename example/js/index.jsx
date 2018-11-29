import 'vertibar';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from '../../build/module';
import simulatedClient from './client';
import MultipleOptionsFlagControls from './controls/multiple-options-flag-controls';
import OnOffFeatures from './controls/on-off-flags-controls';
import OnOffFeaturesDisplay from './features/boolean-flaged-features';
import MultipleOptionsForSameFeature from './features/multiple-options-for-one-feature';

const { subscribe, getFeatureFlagValue } = simulatedClient;

ReactDOM.render(
  <Provider client={{ subscribe, getFeatureFlagValue }}>
    <section className="content-container">
      <section className="row">
        <OnOffFeatures client={simulatedClient} />
        <OnOffFeaturesDisplay />
      </section>
      <section className="row">
        <MultipleOptionsFlagControls client={simulatedClient} />
        <MultipleOptionsForSameFeature />
      </section>
    </section>
  </Provider>,
  document.getElementById('application-container')
);
