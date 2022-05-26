import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack'
import { Text, View } from 'react-native'

import { useAppDispatch } from '../redux/app/hooks';
import { addCatsList } from '../redux/features/Cats';
import { GetCats } from '../hooks/GetCats';
import { Styles } from '../themes/Styles';


interface Props extends StackScreenProps<any,any>{};

export const HomeCatsScreen = ({ navigation }: Props) => {

  const catsDispath = useAppDispatch();

  GetCats().then((cats) => {
    catsDispath(addCatsList(cats));
  })

  return (
    <View style={ Styles.homeScreenContainer }>
        <TouchableOpacity onPress={() => navigation.navigate('VoteScreen')} style={ Styles.buttonHome }>
          <Text style={ Styles.textButtonHome }>Vote</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VowsListScreen')} style={ Styles.buttonHome }>
          <Text style={ Styles.textButtonHome }>Vows List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('BreedsCategoryScreen')} style={ Styles.buttonHome }>
          <Text style={ Styles.textButtonHome }>Breeds Category</Text>
        </TouchableOpacity>
    </View> 
  )
}