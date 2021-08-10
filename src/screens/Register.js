import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInput, RadioButton, IconButton, Colors } from 'react-native-paper';
// import {Ionicons, Zocial} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Form, Item, Input, Label, Button, Picker } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from 'react-native-reanimated';
const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [selected, setSelected] = useState("male");

    return (
        <View style={{ backgroundColor: 'black', flex: 1 }} >
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.logo}
                    source={require('../../icons/logo.png')}>
                </Image>
                <Text style={{ fontSize: RFValue(25), color: '#fff', fontWeight: 'bold' }}>Let's Bong!</Text>
                <Text style={styles.buttonText}>create an account</Text>
            </View>
            <View >
                <Form style={{ marginRight: ('5%'), marginEnd: ('5%') }}>
                    <Item>
                        <Icon
                            name='person-outline' size={25} color="gray" style={{ padding: 10 }}
                        />
                        <Input placeholder='Name' style={styles.buttonText} value={name} onChangeText={setName} />
                    </Item>

                    <Item>
                        <Icon
                            name='mail-outline' size={25} color="gray" style={{ padding: 10 }}
                        />
                        <Input placeholder='Email' style={styles.buttonText} value={email} onChangeText={setEmail} />

                    </Item>


                    <Item>
                        <Icon
                            name='person-outline' size={25} color="gray" style={{ padding: 10 }}
                        />
                        <Input placeholder='Age' style={styles.buttonText} value={age} onChangeText={setAge} />

                    </Item>
                    <Item
                        style={{
                        }}>
                        <Icon
                            name='transgender-outline' size={25} color="gray" style={{ padding: 10 }}
                        />
                        <Picker
                            style={{ color: '#fff', backgroundColor: 'gray' }}
                            mode="dialog"
                            itemStyle={{ backgroundColor: 'gray' }}
                            placeholder="Select One"
                            placeholderStyle={{ color: "#2874F0" }}
                            note={false}
                            selectedValue={selected}
                            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
                        >

                            <Picker.Item label="Male" value="male" color="black" />
                            <Picker.Item label="Female" value="female" color="black" />
                        </Picker>
                    </Item>

                </Form>
                <Button iconRight rounded full light style={styles.button} onPress={() => navigation.navigate("Varify", { number: email })} >

                    <Text style={styles.buttonText} >Register</Text>
                    <Icon name='caret-forward-outline' size={25} color="#fff" style={{ padding: 0 }} />
                </Button>
            </View>
            <Image style={{ width: wp('100%'), flex: 1 }}
                source={require('../../icons/bottomlogo.png')} />

        </View>
    );
}
export default Register;


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: wp('80%'),
        height: hp('7%'),
        borderRadius: 30,
        backgroundColor: '#F44040',
        borderColor: '#F44040',
        borderWidth: 1,
        marginBottom: ('5%'),
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: ('10%')
    },
    logo: {
        width: 141,
        height: 73,
        marginTop: hp('1%'),
    },
    buttonText: {
        fontSize: RFValue(18),
        color: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    input: {
        width: wp('85%'),
        marginBottom: ('2%'),
    }

})