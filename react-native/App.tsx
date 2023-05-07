import React from 'react';
import { LogBox, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MainRoutes from './src/routes';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar translucent />
        <MainRoutes />
      </View>
    </Provider>
  );
};

export default App;
