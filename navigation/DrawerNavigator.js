import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import ScreenThree from '../screens/ScreenThree';

const DrawerApp = createDrawerNavigator({
  Screen_Three: {
    screen: HomeScreen,
  },
},{
    drawerBackgroundColor: '#0000',
    drawerPosition: 'right',
    drawerWidth: '75'
});

export default DrawerApp;
