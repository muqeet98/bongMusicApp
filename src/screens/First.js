import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const First = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'black', flex: 2 }} >
            <View style={{ alignItems: 'center', marginTop: ('30%') }}>
                <Image style={styles.logo}
                    source={require('../../icons/logo.png')} />
            </View>
            <View style={{ alignItems: 'center', marginTop: ('25%') }}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EmailLogin")}>
                    <Text style={styles.buttonText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.buttonText}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



export default First;


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: wp('80%'),
        height: wp('10%'),
        borderRadius: 30,
        backgroundColor: '#F44040',
        borderColor: '#F44040',
        borderWidth: 1,
        marginBottom: ('5%'),
        justifyContent: 'center'
    },
    logo: {
        width: 178,
        height: 92,
        marginTop: ('15%'),
        alignItems: 'stretch'
    },
    buttonText: {
        fontSize: RFValue(18),
        color: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
    },
})