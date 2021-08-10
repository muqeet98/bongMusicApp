import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import SongsMenu from './../SongsMenu';
import ArtistHeader from '../ArtistComponent/ArtistHeader';
// import ArtistFlatlist from './../ArtistComponent/ArtistFlatlist';
import { NavigationContainer } from '@react-navigation/native';
const MenuItems = ({ modalvisible, setModalVisible }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ backgroundColor: 'black', width: ('100%'), height: ('100%'), borderRadius: 20 }}>
                <Image source={{ uri: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg" }} style={styles.imageStyle} />
                <View >
                    <Text style={styles.textstyleL}>Rare Song title</Text>
                    <Text style={styles.textstyle}>Selena Gomet</Text>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly' }}>
                    <View style={{alignItems:'center'}}>
                        <Icon name="heart-outline" size={30} color="red" />
                        <Text style={styles.textstyle}>3800 Likes</Text>
                    </View>
                    <Text>      </Text>
                    <View style={{alignItems:'center'}}>
                        <Icon name="play-circle" size={30} color="red" />
                        <Text style={styles.textstyle}>10000 Stream</Text>
                    </View>
                </View>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignContent: 'flex-start', paddingHorizontal:10 }}>
                        <Icon name="musical-note" size={30} color="#Fff" />
                        <Text style={styles.textstyle}>Add to playlist</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignContent: 'flex-start',paddingHorizontal:10 }}>
                        <Icon name="sync" size={30} color="#Fff" />
                        <Text style={styles.textstyle}>save to library</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignContent: 'flex-start' ,paddingHorizontal:10}}>
                        <Icon name="download" size={30} color="#Fff" />
                        <Text style={styles.textstyle}>Download</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignContent: 'flex-start' ,paddingHorizontal:10}}>
                        <Icon name="share" size={30} color="#Fff" />
                        <Text style={styles.textstyle}>Share</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> <ArtistHeader/>}>
                    <View style={{ flexDirection: 'row', alignContent: 'flex-start',paddingHorizontal:10 }}>
                        <Icon name="disc-outline" size={30} color="#Fff" />
                        <Text style={styles.textstyle}>View artist</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignContent: 'flex-start',paddingHorizontal:10 }}>
                        <Icon name="disc-outline" size={30} color="#Fff" />
                        <Text style={styles.textstyle}>View album</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 5 }}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => setModalVisible(!modalvisible)}>
                    <Text style={{ fontSize: RFValue(18), color: '#fff' }} >Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MenuItems;

const styles = StyleSheet.create({
    imageStyle: {
        width: wp('50%'), height: hp('25%'), borderRadius: 5, alignSelf: 'center'
    },
    textstyle: {
        color: '#fff',
        marginLeft: ('2%'),
        fontSize: RFValue(15),
        alignSelf: 'center',
    },
    textstyleL: {
        color: '#fff',
        marginLeft: ('2%'),
        marginTop: 10,
        fontSize: RFValue(18),
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    buttonStyle: {
        marginTop: 2,
        width: wp('71%'),
        height: hp('5%'),
        backgroundColor: 'black',
        borderRadius: 30,
        alignItems: 'center'
    }
})