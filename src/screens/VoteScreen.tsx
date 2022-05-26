import React, { useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { addNewVote } from '../redux/features/Vows';
import { CardCat } from '../components/CardCat';
import { Styles } from '../themes/Styles';
import { ScrollView } from 'react-native-gesture-handler';


let positionInitialState = 0

export const VoteScreen = () => {
  const [position, setPosition] = useState(positionInitialState);

  const catsList = useAppSelector(state => state.catsList.catsList);
  const catsDispatch = useAppDispatch();

  const urlLike = '/home/danielapps/ReactNative/reactNative/Work/CatsApp/images/like.png'
  const urlDislike = '/home/danielapps/ReactNative/reactNative/Work/CatsApp/images/Dislike.png'

  const addVote = (value: number) => {
    changeCat();
    catsDispatch(addNewVote({ cat:catsList[position], value: value }));
  }

  const changeCat = () => {
    const isLastCat = position >= catsList.length-1
    if (isLastCat){
      positionInitialState = 0
      setPosition(positionInitialState)
    }else{
      positionInitialState++
      setPosition(position+1);
    }
  }

  return (
    <ScrollView>
        <View style={ Styles.voteScreenContainer}>

            <View style={Styles.cardCat}>
                <CardCat cat={catsList[position]}/>
            </View>
            <View style={{ ...Styles.containerButtons}}>

                <TouchableOpacity onPress={() => addVote(1)} style={Styles.voteOption}>
                    <Image source={require(urlLike)} style={{ ...Styles.voteOption }}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addVote(-1)} style={Styles.voteOption}>
                    <Image source={require(urlDislike)} style={{ ...Styles.voteOption }}/>
                </TouchableOpacity>

            </View>

        </View>
    </ScrollView>
  )

}


