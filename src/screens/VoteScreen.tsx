import React, { useState } from 'react'
import { ActivityIndicator, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { Styles } from '../themes/Styles';
import { CardCat } from '../components/CardCat';
import Carousel from 'react-native-snap-carousel';
import { addNewDislikeVote, addNewLikeVote } from '../redux/features/Vows';

let position = 0


export const VoteScreen = () => {

  const catsList = useAppSelector(state => state.catsList.catsList);
  const vows = useAppSelector(state => state.vowsList.vows);

  const catsDispatch = useAppDispatch();

  const urlLike = '/home/danielapps/ReactNative/reactNative/Work/CatsApp/images/like.png'
  const urlDislike = '/home/danielapps/ReactNative/reactNative/Work/CatsApp/images/Dislike.png'

  const addLikeVote = () => {
    catsDispatch(addNewLikeVote(catsList[position]))
    position++;
  }

  const addDislikeVote = () => {
    catsDispatch(addNewDislikeVote(catsList[position]))
    position++;
  }

  return (
    <View style={ Styles.voteScreenContainer}>

        <View style={Styles.cardCat}>
            <CardCat cat={catsList[position]}/>
        </View>

        <View style={{ ...Styles.containerButtons}}>
            <TouchableOpacity onPress={() => addLikeVote()} style={Styles.voteOption}>
                <Image source={require(urlLike)} style={{ ...Styles.voteOption }}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addDislikeVote()} style={Styles.voteOption}>
                <Image source={require(urlDislike)} style={{ ...Styles.voteOption }}/>
            </TouchableOpacity>
        </View>

    </View>
  )

}


