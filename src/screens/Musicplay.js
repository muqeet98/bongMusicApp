import React, { useEffect, useState } from 'react';
import { Text, Button, View, StyleSheet, FlatList, ScrollView, Image } from 'react-native';
import TrackPlayer, { TrackPlayerEvents, STATE_PLAYING } from 'react-native-track-player';
import { useTrackPlayerProgress, useTrackPlayerEvents } from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import TRACKsList from '../../components/Tracks';
const TRACKS = [
  {
    id: '1',
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    album: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    url: "https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3",
  },
  {
    id: '2',
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    album: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: '3',
    title: 'Hotline Bling',
    artist: 'Drake',
    album: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  },
  {
    id: '4',
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    album: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    url: "https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3",
  },
  {
    id: '5',
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    album: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: '6',
    title: 'Hotline Bling',
    artist: 'Drake',
    album: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  },
];

const trackPlayerInit = async () => {
  TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
      TrackPlayer.CAPABILITY_PLAY_FROM_ID,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT
    ],
  });
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(TRACKS);
  return true;
};

const Musicplay = ({ navigation, id, url, album ,artist }) => {
  
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const {position, duration } = useTrackPlayerProgress(250);
  


  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    }
    startPlayer();
  }, []);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  const slidingStarted = () => {
    setIsSeeking(true);
  };

  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };


  const onButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  }



  const skipNext = () => {
    console.log("Hello Skip")
    TrackPlayer.skipToNext();

  }
  const skipPrevious = () => {
    TrackPlayer.skipToPrevious();
  }

  return (
    <View>
      <Slider
        style={{ width: 360, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        value={sliderValue}
        minimumTrackTintColor="#111000"
        maximumTrackTintColor="#000000"
        onSlidingStart={slidingStarted}
        onSlidingComplete={slidingCompleted}
      />

      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.0}>
          <Icon name='heart-outline' size={25} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={skipPrevious}>
          <Icon name='play-skip-back' size={25} color="white" />
        </TouchableOpacity>


        <TouchableOpacity onPress={onButtonPressed} disabled={!isTrackPlayerInit}>
          {isPlaying ? <Icon name='play' size={30} color="white" /> :
            <Icon name='pause' size={30} color="white" />}
        </TouchableOpacity>


        <TouchableOpacity onPress={skipNext}>

          <Icon name='play-skip-forward' size={25} color="white" />

        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.0}>
          <Icon name='sync-circle-outline' size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.container2} >
        <TouchableOpacity >

          <Icon name='repeat-outline' size={25} color="white" />

        </TouchableOpacity>
        <TouchableOpacity onPress={ () => console.log(id) }>

          <Icon name='shuffle-outline' size={25} color="white" />

        </TouchableOpacity>

      </View>
    </View>
  );
}

export default Musicplay;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 8,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: ('7%'),
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
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