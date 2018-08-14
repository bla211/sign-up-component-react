import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/reducers';
const store = createStore(reducer);

export default function Provider({ story }) {
  return (
    <ReduxProvider store={store}>
      <div>
        {story}
      </div>
    </ReduxProvider>
  );
};