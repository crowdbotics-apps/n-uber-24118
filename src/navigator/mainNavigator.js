import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps197692Navigator from '../features/Maps197692/navigator';
import Settings197670Navigator from '../features/Settings197670/navigator';
import Settings197655Navigator from '../features/Settings197655/navigator';
import NotificationList197654Navigator from '../features/NotificationList197654/navigator';
import Maps197653Navigator from '../features/Maps197653/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps197692: { screen: Maps197692Navigator },
Settings197670: { screen: Settings197670Navigator },
Settings197655: { screen: Settings197655Navigator },
NotificationList197654: { screen: NotificationList197654Navigator },
Maps197653: { screen: Maps197653Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
