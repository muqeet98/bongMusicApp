
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { TextInput, RadioButton, IconButton, Colors } from 'react-native-paper';
// import {Ionicons, Zocial} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Form, Item, Input, Label, Button, Picker } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from 'react-native-reanimated';

const EmailLogin = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    return (
        <View style={{ backgroundColor: 'black', flex: 1, borderWidth: 2 }} >
            <Image style={styles.logo}
                source={require('../../icons/logo.png')} />

            <View style={{ alignItems: 'center' }}>

                <Text style={{ fontSize: RFValue(25), fontWeight: 'bold', color: '#fff', alignSelf: 'center' }}>Welcome Onboard!</Text>
                <Text style={styles.buttonTextsmall}>Login with</Text>
            </View>
            <View>
                <Form style={{ marginRight: ('5%'), marginEnd: ('5%') }}>
                    <Item>
                        <Icon
                            name='mail-outline' size={25} color="gray" style={{ padding: 10 }}
                        />
                        <Input placeholder='Emain or Number' style={{ fontSize: 15, color: '#fff' }} value={email} onChangeText={setEmail} />
                    </Item>
                    <Item>
                        <Icon
                            name='mail-outline' size={25} color="gray" style={{ padding: 10 }}
                        />
                        <Input placeholder='Password' style={{ fontSize: 15, color: '#fff' }} value={password} onChangeText={setPassword} />
                    </Item>
                </Form>
                <Button iconRight light full rounded style={styles.button} onPress={() => navigation.navigate("Home")} >

                    <Text style={styles.buttonText}>Continue</Text>
                    <Icon name='caret-forward-outline' size={25} color="#fff" />
                </Button>

                <Text style={{ fontSize: RFValue(15), color: '#fff', alignSelf: 'flex-end', marginHorizontal: ('10%'), marginVertical: 5 }}>
                    Forget Password?</Text>
                <Text style={styles.buttonTextsmall}> ───── or continue with ─────</Text>

                <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', marginLeft: wp('7%'), marginRight: wp('12%') }}>
                    <Button iconRight light rounded full style={styles.buttonfb} >
                        <Icon name='logo-facebook' size={20} color="#fff" />
                        <Text style={styles.buttonTextsmall}> facebook</Text>

                    </Button>
                    <Button iconRight rounded full light style={styles.buttonfb} >
                        <Icon name='logo-google' size={20} color="#fff" />
                        <Text style={styles.buttonTextsmall}> google</Text>
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.buttonTextsmall}>Don't have account?</Text>
                    <Text style={{ color: '#F44040' }} onPress={() => navigation.navigate("SignUp")}> Create an account</Text>
                </View>
            </View>
            <Image style={{ width: wp('100%'), height: 179 }}
                source={require('../../icons/bottom.png')} />
        </View>
    );
}
export default EmailLogin;


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: wp('90%'),
        height: hp('6%'),
        borderRadius: 30,
        backgroundColor: '#F44040',
        borderColor: '#F44040',
        borderWidth: 1,
        marginBottom: ('1%'),
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: ('5%')
    },
    logo: {
        width: 143,
        height: 73,
        alignSelf: 'center',

    },
    buttonText: {
        fontSize: RFValue(18),
        color: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonTextsmall: {
        fontSize: RFValue(14),
        color: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    input: {
        width: wp('85%'),
        marginBottom: ('5%'),
    },
    buttonfb: {
        alignItems: 'center',
        width: wp('40%'),
        height: hp('6%'),
        borderRadius: 30,
        backgroundColor: 'black',
        borderColor: '#fff',
        borderWidth: 1,
        marginBottom: ('5%'),
        marginTop: ('5%'),
        marginLeft: ('2%'),
    },

})