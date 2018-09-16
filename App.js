import { createBottomTabNavigator } from 'react-navigation';
import {HomeScreen} from './HomeScreen';
import {CategoriesScreen} from './CategoriesScreen';
import {FavouritesScreen} from './FavouritesScreen';
import {EmergencyScreen} from './EmergencyScreen';

export default createBottomTabNavigator({
  Home: HomeScreen,
  Categories: CategoriesScreen,
  Favourites: FavouritesScreen,
  Emergency: EmergencyScreen
});