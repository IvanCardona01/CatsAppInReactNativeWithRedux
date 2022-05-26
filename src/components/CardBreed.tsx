import React from 'react'
import { Image, Text, View } from 'react-native'
import { Styles } from '../themes/Styles'
import { Cat } from '../redux/features/Cats';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props{
    cat: Cat
}

export const CardBreed = ({ cat }: Props) => {
  const navigation = useNavigation()
  const uri = cat.image?.url
  const withDescription = true
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CatDescription', { cat })} style={{...Styles.containerVoteCard}}>
        <View style={Styles.containerImageCard}>
            {
              cat.image?.url && (
                <Image source={{uri}} style={Styles.imageCard}/>
                )
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
