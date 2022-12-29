/* eslint-disable prettier/prettier */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './Redux/store'

// const store = configureStore();

const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// eslint-disable-next-line prettier/prettier
AppRegistry.registerComponent(appName, () => AppRedux);
