/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
// import SignIn from './screens/signup-login/signin';
// import Login from './screens/loginPage/login';
// import SignUp from './screens/signup/signup';
import App from './screens/navigation/navigation';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
