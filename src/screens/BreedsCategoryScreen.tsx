import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native';

import { useAppSelector } from '../redux/app/hooks';
import { CardBreed } from '../components/CardBreed';


export const BreedsCategoryScreen = () => {

  const catsList = useAppSelector(state => state.catsList.catsList)

  return (
    <View>
        <FlatList
            data={catsList}
            renderItem={({item}) => <CardBreed cat={item}/>}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}