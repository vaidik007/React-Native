import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import loginScreen from '../screens/loginscreen';
import ScreenThree from '../screens/ScreenThree';
import {createStackNavigator} from 'react-navigation-stack';
// import DrawerApp from './DrawerNavigator';
import {createDrawerNavigator} from 'react-navigation-drawer';

const DrawerApp = createDrawerNavigator(
  {
    Screen_Three: {
      screen: ScreenThree,
    },
  },
  {
    drawerBackgroundColor: '#0000',
    drawerPosition: 'right',
    drawerWidth: '75',
  },
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Drawer: DrawerApp,
  },
  {initialRouteName: 'Home'},
);

const Tab = createBottomTabNavigator({
  home: HomeStack,
  Login: {
    screen: loginScreen,
  },
  Third: {
    screen: ScreenThree,
  },
});

export default Tab;
