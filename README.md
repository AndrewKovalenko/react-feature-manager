# react-feature-switch
#### React high-order components kit to make feature management simple

*react-feature-switch* is a library which provide [high order components](https://reactjs.org/docs/higher-order-components.html) to 
manange your application features, run dark launches or A/B tests.

This library is back-end agnostick and will work with any feature-flag implemenemtation as long as you provide it the right client.

## Installation

`npm install --save react-feature-switch` 

or `yarn add react-feature-switch`

## How to use

## Dependencies
For bundle size optimisation purposes this library does not include following dependencies and 
expect them to be provided as peer dependencies:
- React
- React Dom
- PropTypes

### Provider, Feature and Option
At the top level of your app add client provider:
```
   import { Provider as FeatureClientProvider } from 'react-feature-switch';
   ...
   
   ReactDOM.render(
     <FeatureClientProvider client={yourClientImplementation}>
       <MyAppliaction />
     </FeatureClientProvider>,
     document.getElementById('application-container')
   );
```

This example is just simple **on/off** switch: 

```
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
import { Feature, Option } from 'react-feature-switch';

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
However there is an example of a mock client in the [*example* folder](https://github.com/AndrewKovalenko/react-feature-switch/blob/master/example/js/client.js)

### How to run an example

1. `git clone https://github.com/AndrewKovalenko/react-feature-switch.git`
2. `cd react-feature-switch`
3. `npm install`
4. `npm start`
Browser should open automatically, but if it doesn't - visit [http://localhost:10001/](http://localhost:10001/) once build is finished.
