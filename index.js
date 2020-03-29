/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BarcodeGenerator from './src/BarcodeGenerator';

AppRegistry.registerComponent(appName, () => BarcodeGenerator);
