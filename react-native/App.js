import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MainRoutes from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        {/* <StatusBar translucent /> */}
        <MainRoutes />
      </View>
    </Provider>
  );
};

export default App;
