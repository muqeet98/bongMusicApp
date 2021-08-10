import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions, FlatList, ScrollView
} from 'react-native';
import React from 'react';
import { } from 'react-native-gesture-handler';
import TRACKSList from './Tracks';
import RenderItem from '../components/RenderItem';
import Header from '../components/Header';

const TRACKS = {
      id: '1',
      title: 'Stressed Out',
      artist: 'Twenty One Pilots',
      album: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
      url: "https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3",
    }

const FlatListScr = () => {
    return (
        <View style={styles.container}>
            <FlatList
              ListHeaderComponent={()=> <Header lyrics={TRACKS.url} />}
              data={TRACKSList}
              keyExtractor={(item) => item.id }
              renderItem={({item}) => <RenderItem id={item.id} album={item.album} title={item.title} artist={item.artist} url={item.url} /> }
            />
        </View>
    );
}

export default FlatListScr;


const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingRight: 24,
    },
    listItem: {
        margin: 5,
        padding: 10,
        backgroundColor: "#FFF",
        width: "90%",
    
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 10
      },

})