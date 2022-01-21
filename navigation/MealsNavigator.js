import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer as CreateAppContainer} from 'react-navigation';
import {Platform} from 'react-native';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
          },
          headerTintColor: Platform.OS === "android" ? 'white' : Colors?.primaryColor
    }
})

export default CreateAppContainer(MealsNavigator)

