import { Dimensions, StyleSheet } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export const Styles = StyleSheet.create({

    //Home Screen
    homeScreenContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonHome: {
        backgroundColor: '#4294ff',
        marginVertical: 20,
        width: windowWidth*0.6,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        elevation: 9,
        shadowColor: 'black',
    },
    textButtonHome: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },


    //Vote Screen
    voteScreenContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    voteOption: {
        backgroundColor: 'white',
        width: 120,
        height: 120,
        borderRadius: 15,
    },

    //Card Cat
    cardCat: {
        height: windowHeight*0.65,
        backgroundColor: 'white',
    },
    containerCatImage: {
        backgroundColor: 'white', 
        width: 300, 
        height: 300, 
        marginTop: 50, 
        alignSelf: 'center',
        shadowColor: 'black',
        borderRadius: 30,
        justifyContent: 'center',
    },
    titleDescriptionCat: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textDescriptionCat: {
        color: 'black',
        fontSize: 20,
        opacity: 0.6,
        marginLeft: 5,
    },
    containerDescription: {
        marginHorizontal: 30,
        marginTop: 20,
    },
    

    //Vows List
    containerTextVowsIsEmpty: {
        flex: 1,
        justifyContent: 'center',
    },
    textVowsIsEmpty: {
        color: 'black',
        opacity: 0.6,
        fontSize: 30,
        alignSelf: 'center',
    },
    containerVoteCard: { 
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 20,
        height:90,
        elevation: 9,
        shadowColor: 'black',
        backgroundColor: 'white',
    },
    containerImageCard: {
        alignSelf: 'center',
        marginLeft: 10,
    },
    imageCard: { 
        width: 70,
        height: 70,
        borderRadius: 100,
        marginLeft: 10,
    },
    containerVoteCardText: {
        alignSelf: 'center',
        marginLeft: 30,
    },
    titleVoteCard: {
        color: 'black',
        fontWeight: 'bold',
    },
    textVoteCard: {
        color: 'black',
        fontWeight: 'normal',
    },
});