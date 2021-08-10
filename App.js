import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppHome from './navigation/navigator'
const App: () => React$Node =() =>{
  return(
    <NavigationContainer>
      <AppHome/>
    </NavigationContainer>
  )
}
export default App;