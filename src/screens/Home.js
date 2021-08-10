import React from 'react';
import { Text, Button, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import AlbumArt from '../../components/AlbumArt';
import TrackDetails from '../../components/TrackDetails';
import Controls from '../../components/Controls';
import FlatListScr from '../../components/Flatlist';
import Musicplay from '../../src/screens/Musicplay';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1B3863' }}>
      <View style={{ flex: 1, backgroundColor: '#1B3863' }}>
        <FlatListScr  />
      </View>
      <Musicplay />

    </View>
  );
}
export default HomeScreen;
