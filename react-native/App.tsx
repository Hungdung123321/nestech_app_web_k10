import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MainRoutes from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
};

export default App;
