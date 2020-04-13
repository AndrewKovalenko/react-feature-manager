[![Build Status](https://travis-ci.org/AndrewKovalenko/react-feature-manager.svg?branch=master)](https://travis-ci.org/AndrewKovalenko/react-feature-manager)
[![Coverage Status](https://coveralls.io/repos/github/AndrewKovalenko/react-feature-manager/badge.svg?branch=master)](https://coveralls.io/github/AndrewKovalenko/react-feature-manager?branch=master)
# react-feature-manager
#### React high-order components kit to make feature management simple

*react-feature-manager* is a library which provide [high order components](https://reactjs.org/docs/higher-order-components.html) to
manange your application features, run dark launches or A/B tests.

This library is back-end agnostick and will work with any feature-flag implemenemtation as long as you provide the client to it.

## Installation

`npm install --save react-feature-manager`

or `yarn add react-feature-manager`

## How to use

## Dependencies
For bundle size optimisation purposes this library does not include following dependencies and
expect them to be provided as peer dependencies:
- React
- React Dom
- PropTypes

### Library API
This library provides 3 HOCs:
- `Provider` - provides *client* to `Feature` HOCs
- `Feature` - defines a feature to manage. Requires `name: string` property, which should be a featureFlag name
- `Option` - defines a feature implemenatation. Requires a `value` property. If `value` is equal to `featureFlag` value - `childern` of `Option` will be rendered.


At the top level of your app add client provider:
```
   import { Provider as FeatureClientProvider } from 'react-feature-manager';
   ...

   ReactDOM.render(
     <FeatureClientProvider client={yourClientImplementation}>
       <MyApplication />
     </FeatureClientProvider>,
     document.getElementById('application-container')
   );
```

##### NOTE: if your build system does not support "module builds" or you decided to use UMD version of this package for some reason, your imports have to look like:
```
  import featureManager from 'react-feature-manager'

  const { Provider } = featureManager;
  ...
  const { Feature, Option } = featureManager;
```

This example is just simple **on/off** switch:

```
import React from 'react';
import { Feature, Option } from 'react-feature-manager';

<Feature name="one">
  <Option value>
      <span>
        Feature <span className="bold">one</span> is enabled
      </span>
  </Option>
</Feature>
```

Or if you have multiple implementations and want to display specific implementation based
on some *db* or *config* value (like when you run an A/B test):

```
import React from 'react';
import { Feature, Option } from 'react-feature-manager';

const SomeComponent = () => (
  <section className="column">
    <h3>My A/B test:</h3>
      <Feature name="myABTestFlagName">
        <Option value="RecipieA">
          <span>
            <span className="bold">RecipieA</span> enabled
          </span>
        </Option>
        <Option value="RecipieB">
          <span>
           <span className="bold">RecipieB</span> enabled
          </span>
        </Option>
        <Option value="RecipieC">
          <span>
            <span className="bold">RecipieC</span> enabled
          </span>
        </Option>
      </Feature>
  </section>
);
```

### Client
The client is a simple JavaScript object which provides the following methods:

```
{
  subscribe: function(flagName, callback),
  getFeatureFlagValue: function(flagName)
}
```

- **subscribe** - takes a **`flagName: String`** and supposed to call a **`callback`** when `flagName` value is changed. Optionaly `subscribe` may return an
`unSubscribe` function which will be called on `Feature` component *unmount*.
- **getFeatureFlagValue** - takes a **`flagName`** and returns either flag value or **`Promise`** which resolves with a flag value.

Since I can not know your specific implementation for a flag storage - **the client is not provided with this library**.
However there is an example of a mock client in the [*example* folder](https://github.com/AndrewKovalenko/react-feature-manager/blob/master/example/js/client.js)

### How to run an example

1. `git clone https://github.com/AndrewKovalenko/react-feature-manager.git`
2. `cd react-feature-manager`
3. `npm install`
4. `npm start`
Browser should open automatically, but if it doesn't - visit [http://localhost:10001/](http://localhost:10001/) once build is finished.
