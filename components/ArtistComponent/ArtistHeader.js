import React from 'react';
import { Text, View, Image, StyleSheet, Modal,ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons';
const image = { uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2F2020%2F02%2Fselena-gomez-feel-me-studio-version-listen.html&psig=AOvVaw0vVQAkzlo88v1Sx75blXeU&ust=1607176246640000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjnwKa8tO0CFQAAAAAdAAAAABAK" };
const ArtistHeader = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>Salina Gomez</Text>
          <Text>38M Streams | 10M Followers</Text>
        </ImageBackground>
      </View>
    );
}


export default ArtistHeader;

const styles = StyleSheet.create({
    
    tinyLogo: {
        width: wp('90%'),
        height: hp('50%'),
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 2
    },
    textstyle: {
        color: '#FFF',
        marginLeft: ('2%'),
        fontSize: RFValue(15)
    },
    textstyleL: {
        color: '#FFF',
        marginLeft: ('2%'),
        marginTop: 10,
        fontSize: RFValue(18),
        fontWeight: 'bold'
    },
    titleStyle:{
        flexDirection:'row',
        justifyContent:'space-between'
    },


    container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
      }
});
