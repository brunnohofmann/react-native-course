/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Providers from './src/providers';

AppRegistry.registerComponent(appName, () => Providers);
