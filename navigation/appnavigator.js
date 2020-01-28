import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/loginscreen';
import Tab from './TabNavigator';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Tabs: Tab,
  },
  {
    initialRouteName: 'Login',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
