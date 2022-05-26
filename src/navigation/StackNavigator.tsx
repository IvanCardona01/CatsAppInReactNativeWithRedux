import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { CatDescriptionScreen } from '../screens/CatDescriptionScreen';
import { BreedsCategoryScreen } from '../screens/BreedsCategoryScreen';
import { VowsListScreen } from '../screens/VowsListScreen';
import { HomeCatsScreen } from '../screens/HomeCatsScreen';
import { VoteScreen } from '../screens/VoteScreen';
import { Cat } from '../redux/features/Cats';

export type paramsCardCat = {
  cat: Cat
}

export type RootStackParams = {
  HomeCatsScreen: undefined
  VoteScreen: undefined
  VowsListScreen: undefined
  BreedsCategoryScreen: undefined
  CatDescriptionScreen: paramsCardCat
}

export const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator screenOptions={{ headerStyle:{ elevation: 4, shadowColor:'black'}}}>
        <Stack.Screen name='HomeCatsScreen' options={{ title:'Cats App' }} component={HomeCatsScreen}/>
        <Stack.Screen name='VoteScreen' options={{ title:'Vote' }} component={VoteScreen}/>
        <Stack.Screen name='VowsListScreen' options={{ title:'Vows List' }} component={VowsListScreen}/>
        <Stack.Screen name='BreedsCategoryScreen' options={{ title:'Breeds' }} component={BreedsCategoryScreen}/>
        <Stack.Screen name='CatDescriptionScreen' options={{ title:'' }} component={CatDescriptionScreen}/>
    </Stack.Navigator>
  )
}
