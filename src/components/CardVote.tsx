import React from 'react'
import { View, Dimensions, Image, Text } from 'react-native';
import { Vote } from '../redux/features/Vows';
import { Styles } from '../themes/Styles';

interface Props{
  vote: Vote
}

export const CardVote = ({ vote }: Props) => {
  
  const uri = vote.imageUrl

  return (
    
    <View style={Styles.containerVoteCard}>
      <View style={Styles.containerImageCard}>
        {
          vote.imageUrl && (
            <Image source={{uri}} style={Styles.imageCard}/>
          )
        }
      </View>
      <View style={Styles.containerVoteCardText}>
        <Text style={Styles.titleVoteCard}>
          Breed: <Text style={Styles.textVoteCard}>{vote.breed}</Text>
        </Text>

        <Text style={Styles.titleVoteCard}>
          Origin: <Text style={Styles.textVoteCard}>{vote.origin}</Text>
        </Text>

        <Text style={Styles.titleVoteCard}>
          Votes: <Text style={Styles.textVoteCard}>{vote.countVows}</Text>
        </Text>
      </View>
    </View>
  )
}
