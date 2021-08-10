import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, SafeAreaView,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Form, Item, Input, Label, Button, Picker } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { color } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
const CELL_COUNT = 4;
const Varify = (props, {navigation}) => {
    console.log(props.route.params)
    const { number } = props.route.params;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [field, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (

        <View style={{ backgroundColor: '#1B3863', flex: 1 }} >

            <View style={{ alignItems: 'center', marginVertical: ('15%') }}>
                <Text style={{ fontSize: RFValue(20), fontWeight:'bold', color: '#fff' }}>Enter Varification Code</Text>
                <Text style={styles.buttonText}>Please type the varification code send</Text>
                <Text style={styles.buttonText}>to {number}</Text>
            </View>
            <SafeAreaView style={styles.root}>
                <CodeField
                    ref={ref}
                    {...field}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
            </SafeAreaView>
            <Button iconRight rounded full light style={styles.button} onPress={()=> props.navigation.navigate("Register")}>

                <Text style={styles.buttonText} >Submit</Text>
                <Icon name='caret-forward-outline' size={25} color="#fff" style={{ padding: 0 }} />
            </Button>
            <Text style={{ color: '#fff', alignSelf: 'center' }} >Resend Code</Text>
            <Image style={{ width: wp('100%'),flex: 1}}
                    source={require('../../icons/bottomlogo.png')} />
        </View>
    );
}

export default Varify;


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: wp('70%'),
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

    buttonText: {
        fontSize: RFValue(14),
        color: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    input: {
        width: wp('20%'),
        marginBottom: ('5%'),
    },
    textInput: {
        height: hp('7%'),
        borderColor: '#fff',
        borderBottomWidth: 1,
        width: wp('13%'),
        paddingLeft: 20,
        color: '#fff',
        marginHorizontal: wp('1%')
    },

    root: { padding: 10 },
    codeFieldRoot: { marginTop: 10, marginLeft: ('8%'), marginRight: ('8%') },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 2,
        borderColor: 'gray',
        color: '#fff',
        textAlign: 'center'

    },
    focusCell: {
        borderColor: '#000',
    },
})