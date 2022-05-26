import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Styles } from '../themes/Styles'
import { Cat } from '../redux/features/Cats';

interface Props{
    cat: Cat
}

export const CardBreed = ({ cat }: Props) => {
  const navigation = useNavigation()
  const uri = cat.image?.url
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CatDescriptionScreen', { cat })} style={{...Styles.containerVoteCard}}>
        <View style={Styles.containerImageCard}>
          {
            cat.image?.url && (<Image source={{uri}} style={Styles.imageCard}/>)
          }
        </View>

        <View style={Styles.containerVoteCardText}>
          <Text style={Styles.titleVoteCard}>
            Breed: <Text style={Styles.textVoteCard}>{cat.name}</Text>
          </Text>
        </View>
    </TouchableOpacity>
  )
}