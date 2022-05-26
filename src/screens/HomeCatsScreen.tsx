import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../themes/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useCats } from '../hooks/useCats';
import { useAppDispatch } from '../redux/app/hooks';
import { addCatsList, Cat } from '../redux/features/Cats';

interface Props extends StackScreenProps<any,any>{};

export const HomeCatsScreen = ({ navigation }: Props) => {

  const { getCats } = useCats();
  const catsDispath = useAppDispatch();
  getCats().then((cats) => {
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
