import React,{useState} from 'react';
import {   Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MenuItems from './../components/SongsMenu/MenuItems';

const SongsMenu = () => {

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
            {/* <Icon style={{alignSelf:'flex-end'}} name="close-outline" size={25} onPress={() => {
                setModalVisible(!modalVisible);
              }} /> */}
              <MenuItems modalvisible={modalVisible} setModalVisible={setModalVisible} />
            <Text style={styles.modalText}></Text>
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
          <Icon name="ellipsis-vertical-outline" size={25} color="#fff"/>
          
        </View>
      </TouchableHighlight>

    </View>
  );
}

export default SongsMenu;

const styles = StyleSheet.create({
    centeredView: {
      
      alignContent:'flex-end',
      alignItems: 'center',
    },
    modalView: {
        marginTop: ('23%'),
      padding: 35,
      height: hp('74%'),
      width: wp('90%'),
    
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
      marginBottom: 5,
      textAlign: "center"
    }
  });