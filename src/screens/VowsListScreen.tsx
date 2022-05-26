import React from 'react'
import { View, Text } from 'react-native';
import { useAppSelector } from '../redux/app/hooks';
import { Styles } from '../themes/Styles';
import { FlatList } from 'react-native-gesture-handler';
import { CardVote } from '../components/CardVote';

export const VowsListScreen = () => {

  const vows = useAppSelector(state => state.vowsList.vows)
  const vowsIsEmpty = vows.length == 0
  if(vowsIsEmpty){
    return(
        <View style={Styles.containerTextVowsIsEmpty}>
            <Text style={Styles.textVowsIsEmpty }>Votes Not Found</Text>
        </View>
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
       <FlatList
        data={vows}
        renderItem={({item}) => <CardVote vote={item}/>}
        showsVerticalScrollIndicator={false}
       />
    </View>
  )
}
