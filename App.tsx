import React from 'react';
import Routes from './App/Navigation/Routes';
import {Provider} from 'react-redux';
import configureStore from './App/Redux/store';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
