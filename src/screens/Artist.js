import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ArtistHeader from '../../components/ArtistComponent/ArtistHeader';
const Artist = ({navigation }) => {
    return (
        <View>
           <ArtistHeader/>
        </View>
    );
}

export default Artist;
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#1B3863",
        width: "100%",

        alignSelf: 'flex-start',
        flexDirection: "row",
        borderRadius: 0
    },
    textStyle: {
        fontWeight: "bold",
        color:'#fff'
    }

})