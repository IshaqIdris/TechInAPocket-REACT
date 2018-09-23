import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import {HomeScreen} from './HomeScreen';
import {CategoriesScreen} from './CategoriesScreen';
import {FavouritesScreen} from './FavouritesScreen';
import {EmergencyScreen} from './EmergencyScreen';
import {TutorialScreen} from './TutorialScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Tutorial: TutorialScreen,
});

export default createBottomTabNavigator({
  Home: HomeStack,
  Categories: CategoriesScreen,
  Favourites: FavouritesScreen,
  Emergency: EmergencyScreen
});