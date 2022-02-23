/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebaseSetup from './firebase-setup';

AppRegistry.registerComponent(appName, () => App);
