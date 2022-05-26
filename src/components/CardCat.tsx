import React from 'react'
import { Image, Text, View } from 'react-native';

import { Styles } from '../themes/Styles';
import { Cat } from '../redux/features/Cats';
import { ScrollView } from 'react-native-gesture-handler';

interface Props{
  cat: Cat
} 

export const CardCat = ({ cat }: Props) => {

  const uri = cat.image?.url

  return (
    <ScrollView>

        <View style={ Styles.cardCat }>

            <View style={ Styles.containerCatImage}>
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

            </View>

        </View>
    </ScrollView>
  )
}