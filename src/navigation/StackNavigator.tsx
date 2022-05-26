import { createStackNavigator } from '@react-navigation/stack'
import { ScaleFromCenterAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import React from 'react'
import { CardCat } from '../components/CardCat';
import { BreedsCategoryScreen } from '../screens/BreedsCategoryScreen';
import { HomeCatsScreen } from '../screens/HomeCatsScreen';
import { VoteScreen } from '../screens/VoteScreen';
import { VowsListScreen } from '../screens/VowsListScreen';
import { Cat } from '../redux/features/Cats';
import { booleanLiteral } from '@babel/types';
import { CatDescription } from '../screens/CatDescription';

export type paramsCardCat = {
  cat: Cat
  withDescription: boolean
}

export type RootStackParams = {
  HomeCatsScreen: undefined
  VoteScreen: undefined
  VowsListScreen: undefined
  BreedsCategoryScreen: undefined
  CatDescription: Cat
}

export const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator screenOptions={{ headerStyle:{ elevation: 4, shadowColor:'black'}}}>
        <Stack.Screen name='HomeCatsScreen' options={{ title:'Cats App' }} component={HomeCatsScreen}/>
        <Stack.Screen name='VoteScreen' options={{ title:'Vote' }} component={VoteScreen}/>
        <Stack.Screen name='VowsListScreen' options={{ title:'Vows List' }} component={VowsListScreen}/>
        <Stack.Screen name='BreedsCategoryScreen' options={{ title:'Breeds Category' }} component={BreedsCategoryScreen}/>
        <Stack.Screen name='CatDescription' options={{ title:'' }} component={CatDescription}/>
    </Stack.Navigator>
  )
}
