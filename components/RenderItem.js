import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Musicplay from '../src/screens/Musicplay';
const RenderItem = ({ id, album, artist, title,url , navigation}) => {
    return (
        <View>
       <TouchableOpacity>
        <View style={styles.listItem}>
            <Image source={{ uri: album }} style={{ width: wp('10%'), height: hp('5%'), borderRadius: 0 }} />
            <View style={{ alignItems: 'flex-start', paddingLeft:10 }}>
                <Text style={styles.textStyle}>{title}</Text>
                <Text style={styles.textStyle}>{artist}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    );
}

export default RenderItem;
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
        fontWeight:'bold',
        color:'#fff'
    }

})