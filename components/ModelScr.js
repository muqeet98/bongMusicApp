import React,{useState} from 'react';
import {   Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const ModelScr = ({lyrics}) => {

    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon style={{alignSelf:'flex-end'}} name="arrow-down-circle" size={25} color="#ff6900" onPress={() => {
                setModalVisible(!modalVisible);
              }} />
            <Text style={styles.modalText}>{lyrics}</Text>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
          <View>
        <Text style={styles.textStyle}>There is a song lyrics (:</Text>
        <Text style={{color: 'red'}} >Lyrics</Text>
        </View>
      </TouchableHighlight>

    </View>
  );
}

export default ModelScr;

const styles = StyleSheet.create({
    centeredView: {
      
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    modalView: {
    
      backgroundColor: "white",
      
      padding: 35,
      height: ('91%'),
      width: ('100%')
     
    },
    openButton: {
      backgroundColor: "#1B3863",
      borderRadius: 1,
      padding: 10,
      elevation: 0
    },
    textStyle: {
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });