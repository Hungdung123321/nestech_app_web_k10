/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import CardToDo from './src/components/CardToDo';
import InputForm from './src/components/InputForm';
import PrioritySelectModal from './src/components/PrioritySelectModal';

AppRegistry.registerComponent(appName, () => App);
