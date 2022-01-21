import React from 'react';
import {View, Text, StyleSheet, Button, FlatList } from 'react-native'
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';


const CategoryMealScreen = props => {
    const catId = props.navigation.getParam("categoryId")

    const displayedMeals = MEALS.filter(meal=> meal.categoryIds.includes(catId))
    
    const renderMealItems = itemData => {
        return <MealItem item={itemData.item} onSelectMeal={() => {
            props.navigation.navigate("MealDetail", {
            mealId: itemData.item.id
        })}}/>
    }
     return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={ renderMealItems}/>
        </View>
    )
}

CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam("categoryId");

    const selectedCategory  = getSelectedCategory(catId)

    return {
        headerTitle: selectedCategory?.title
    }
}

const getSelectedCategory = (catId) => {
    return CATEGORIES.find(cat => cat.id === catId);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignContent:'center'
    }
})
export default CategoryMealScreen;