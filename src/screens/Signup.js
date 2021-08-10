// import React, { useState } from 'react';
// import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { TextInput, RadioButton, IconButton, Colors } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Container, Header, Content, Form, Item, Input, Label, Button, Picker } from 'native-base';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { color } from 'react-native-reanimated';
// const SignUp = ({ navigation }) => {
//     const [email, setEmail] = useState("");
//     const [validated, SetValidated] = useState(true)

//     const go = () => {
//         const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if (reg.test(email) === true) {
//             // navigation.navigate('Varify'); 
//             SetValidated(true)
//         }
//         else {
//             SetValidated(false)
//         }

//     }
//     return (
//         <View style={{ backgroundColor: 'black', flex: 1 }} >
//             <View style={{ alignItems: 'center' }}>
//                 <Image style={styles.logo}
//                     source={require('../../icons/logo.png')}>
//                 </Image>
//                 <Text style={{ fontSize: 35, color: '#fff' }}>Let's Bong!</Text>
//                 <Text style={styles.buttonText}>create an account</Text>
//             </View>
//             <View>
//                 <Form style={{ marginHorizontal: ('5%'), marginEnd: ('10%') }}>
//                     <Item>
//                         <Icon
//                             name='mail-outline' size={25} color="gray" style={{ padding: 10 }}
//                         />
//                         <Input placeholder='Email or Number' style={{ fontSize: 15, color: '#fff' }}
//                             value={email} onChangeText={setEmail}
//                         />
//                     </Item>
//                 </Form>
//                 {!validated ? <Text style={{ color: 'red', marginRight: ('10%'), alignSelf: 'flex-end' }}>Wrong Email</Text> : null}
//                 <Button iconRight rounded style={styles.button} onPress={go} >
//                     <Text style={styles.buttonText}>Next</Text>
//                     <Icon name='caret-forward-outline' size={25} color="#fff" />
//                 </Button>
//                 <Text style={styles.buttonTextsmall}> ───── or continue with ─────</Text>

//                 <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', marginHorizontal: ('7%') }}>
//                     <Button iconRight rounded light style={styles.buttonfb} >
//                         <Icon name='logo-facebook' size={20} color="#fff" />
//                         <Text style={styles.buttonText}> facebook</Text>

//                     </Button>
//                     <Button iconRight rounded light style={styles.buttonfb} >
//                         <Icon name='logo-google' size={20} color="#fff" />
//                         <Text style={styles.buttonText}> google</Text>

//                     </Button>
//                 </View>
//                 <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
//                     <Text style={styles.buttonTextsmall}>Don't have account?</Text>
//                     <Text style={{ color: '#F44040' }} onPress={() => navigation.navigate("EmailLogin")} > Log in</Text>
//                 </View>
//             </View>


//         </View>
//     );
// }
// export default SignUp;


// const styles = StyleSheet.create({
//     button: {
//         alignItems: 'center',
//         width: hp('45%'),
//         height: wp('11%'),
//         borderRadius: 30,
//         backgroundColor: '#F44040',
//         borderColor: '#F44040',
//         borderWidth: 1,
//         marginBottom: ('5%'),
//         justifyContent: 'center',
//         alignSelf: 'center',
//         marginTop: ('10%')
//     },
//     logo: {
//         width: wp('51%'),
//         height: hp('14%'),
//         marginTop: hp('1%'),
//     },
//     buttonText: {
//         fontSize: 20,
//         color: '#fff',
//         alignSelf: 'center',
//         justifyContent: 'center',
//         alignSelf: 'center'
//     },
//     buttonTextsmall: {
//         fontSize: 18,
//         color: '#fff',
//         alignSelf: 'center',
//         justifyContent: 'center',
//         alignSelf: 'center'
//     },
//     input: {
//         width: wp('85%'),
//         marginBottom: ('5%'),
//     },
//     buttonfb: {
//         alignItems: 'center',
//         width: hp('22%'),
//         height: wp('11%'),
//         borderRadius: 30,
//         backgroundColor: 'black',
//         borderColor: '#fff',
//         borderWidth: 1,
//         marginBottom: ('5%'),
//         justifyContent: 'center',
//         alignSelf: 'center',
//         marginTop: ('10%')
//     },

// })



import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInput, RadioButton, IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Form, Item, Input, Label, Button, Picker } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from 'react-native-reanimated';
const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [validated, SetValidated] = useState(true)

    const go = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === true) {
            // navigation.navigate('Varify'); 
            SetValidated(true)
            navigation.navigate("Varify", {number: email})
        }
        else {
            SetValidated(false)
        }
        
    }
    return (
        <View style={{ backgroundColor: 'black', flex: 1 }} >
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.logo}
                    source={require('../../icons/logo.png')}>
                </Image>
                <Text style={{ fontSize: RFValue(25), color: '#fff', fontWeight: 'bold' }}>Let's Bong!</Text>
                <Text style={styles.buttonText}>create an account</Text>
            </View>
            <View>
                <Form style={{marginRight: ('5%'), marginEnd: ('5%') }}>
                    <Item>
                        <Icon
                            name='mail-outline' size={25} color="gray" style={{ padding: 10 }}
                        />
                        <Input placeholder='Email or Number' style={{ fontSize: 15, color: '#fff' }}
                            value={email} onChangeText={setEmail}
                        />
                    </Item>
                </Form>
                {!validated ? <Text style={{ color: 'red', marginRight: ('10%'), alignSelf: 'flex-end' }}>Wrong Email</Text> : null}
                <Button iconRight full rounded style={styles.button} onPress={go} >
                    <Text style={styles.buttonText}>Next</Text>
                    <Icon name='caret-forward-outline' size={25} color="#fff" />
                </Button>
                <Text style={{color:'#fff', alignSelf:'center', fontSize: RFValue(14), marginTop: 15}}> ───── or continue with ─────</Text>

                <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' ,marginLeft: wp('7%'), marginRight:wp('12%') }}>
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
                    <Text style={styles.buttonTextsmall}>Have an account?</Text>
                    <Text style={{ color: '#F44040' }} onPress={() => navigation.navigate("EmailLogin")} > Log in</Text>
                </View>
            </View>
            <Image style={{ width: wp('100%'),flex: 1}}
                    source={require('../../icons/bottomlogo.png')} />
        </View>
    );
}
export default SignUp;


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
        width: 141,
        height: 73,
        alignSelf:'center',
        
    },
    buttonText: {
        fontSize: RFValue(18),
        color: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonTextsmall: {
        fontSize: RFValue(14),
        color: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
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