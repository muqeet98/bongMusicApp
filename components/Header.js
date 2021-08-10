import React from 'react';
import { Text, View, Image, StyleSheet, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import ModelScr from './ModelScr';
import Icon from 'react-native-vector-icons/Ionicons';
import SongsMenu from './SongsMenu';

const Header = ({ lyrics }) => {
    return (
        <View>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <ModelScr lyrics={lyrics} />
            <View style={styles.titleStyle} >
                <View >
                    <Text style={styles.textstyleL}>Rare Song title</Text>
                    <Text style={styles.textstyle}>Selena Gomez</Text>
                </View>
                <View>
                    <SongsMenu />
                </View>

            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
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
    }
});
