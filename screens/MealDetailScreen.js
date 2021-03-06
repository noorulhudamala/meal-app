import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';



const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = getSelectedMeal(mealId)
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen!</Text>
            <Text>{selectedMeal?.title}</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    )
}
MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = getSelectedMeal(mealId)
    return {
        headerTitle: selectedMeal?.title,
        headerRight: ()=> (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Favorite" iconName='ios-star' onPress={() => console.log("Mark as favorite")} />
            </HeaderButtons>
        )
    }
}

const getSelectedMeal = (mealId) => {
    return MEALS.find(meal => meal.id === mealId)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})
export default MealDetailScreen;