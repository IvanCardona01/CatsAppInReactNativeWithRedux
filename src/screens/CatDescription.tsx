import React from 'react'
import { Image, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { ScrollView } from 'react-native-gesture-handler';
import { Styles } from '../themes/Styles';

interface Props extends StackScreenProps<RootStackParams, 'CatDescription'>{}

export const CatDescription = ({ route }: Props) => {
  const {cat} = route.params
  const uri = cat.image?.url
  return (
    <ScrollView style={{flex:1, backgroundColor: 'white'}}>

        <View style={{marginTop: 10}}>
        {
            (uri != null )
            ?<Image source={{uri}} style={{ ...Styles.containerCatImage, marginTop: 0}} />
            :<Text style={{ color: 'black', fontSize: 20, textAlign: 'center'}}>Image Not Found</Text>
        }
        </View>

        <View style={ Styles.containerDescription }>
            <View style={{flexDirection: 'row'}}>
                <Text style={Styles.titleDescriptionCat}>Breed: </Text> 
                <Text style={Styles.textDescriptionCat}>{cat.name} </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={Styles.titleDescriptionCat}>Origin: </Text> 
                <Text style={Styles.textDescriptionCat}>{cat.origin} </Text>
            </View> 
            <View style={{flexDirection: 'row'}}>
                <Text style={Styles.titleDescriptionCat}>Intelligence: </Text> 
                <Text style={Styles.textDescriptionCat}>{cat.intelligence} </Text>
            </View> 
            <Text style={Styles.titleDescriptionCat}>Description: </Text> 
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{...Styles.textDescriptionCat, marginLeft: 0}}>{cat.description} </Text>
            </View> 
        </View>
    </ScrollView>
  )
}
