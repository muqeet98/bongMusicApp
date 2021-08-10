import React from 'react';
//import {Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../src/screens/Home';
import Register from '../src/screens/Register';
import Signup from '../src/screens/Signup';
import First from '../src/screens/First';
import EmailLogin from '../src/screens/Emaillogin';
import Varify from '../src/screens/Varify';
import  Musicplay from '../src/screens/Musicplay';
import Artist from '../src/screens/Artist';
import ArtistHeader from '../components/ArtistComponent/ArtistHeader';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppHome() {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="First" component={First} options={{ headerShown: false }} />
      <Stack.Screen name="Musicplay" component={Musicplay} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={({ navigation }) => ({
        title: '',
        headerTitleStyle: { alignSelf: 'center' },
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTintColor: '#fff',

        headerTitleAlign: 'center'

      })
      } />

      <Stack.Screen name="SignUp" component={Signup} options={({ navigation }) => ({

        title: '',
        headerTitleStyle: { alignSelf: 'center' },
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTintColor: '#fff',

        headerTitleAlign: 'center'

      })
      } />

      <Stack.Screen name="Home"  component={HomeScreen} />
      <Stack.Screen name="Varify" component={Varify} />
      <Stack.Screen name="ArtistH" component={ArtistHeader} options={({ navigation }) => ({

title: '',
headerTitleStyle: { alignSelf: 'center' },
headerStyle: {
  backgroundColor: 'black'
},
headerTintColor: '#fff',

headerTitleAlign: 'center'

})
}/> 
      <Stack.Screen name="EmailLogin" component={EmailLogin} options={({ navigation }) => ({

        title: '',
        headerTitleStyle: { alignSelf: 'center' },
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTintColor: '#fff',

        headerTitleAlign: 'center'

      })
      } />
    </Stack.Navigator>
  );
}

export default AppHome;