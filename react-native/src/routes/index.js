import React from 'react';
import { Text, View } from 'react-native';

import { SCREEN_NAMES } from '../constants/screenName';
import AddNewTaskScreen from '../screens/addNew';
import HomeScreen from '../screens/home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
        <MainStack.Screen
          name={SCREEN_NAMES.ADD_NEW}
          component={AddNewTaskScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
