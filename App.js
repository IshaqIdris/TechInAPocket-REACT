import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import {HomeScreen} from './HomeScreen';
import {CategoriesScreen} from './CategoriesScreen';
import {EmergencyScreen} from './EmergencyScreen';
import {TutorialScreen} from './TutorialScreen';
import {CategoryScreen} from './CategoryScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Tutorial: TutorialScreen,
});

const CategoriesStack = createStackNavigator({
  Categories: CategoriesScreen,
  Category: CategoryScreen,
  Tutorial: TutorialScreen
});

export default createBottomTabNavigator({
  Home: HomeStack,
  Categories: CategoriesStack,
  Emergency: EmergencyScreen
});