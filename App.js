import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

// import the components
import Home from './Screen/Home';
import About from './Screen/About';
import ReviewDetails from './Screen/reviewDetails';
import Navigator from './routes/drawer';

// access the font
const getFonts=()=>{
  return(
    Font.loadAsync({
      'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
    })
  )
}
const App = () => {
  const [fontsLoaded,setfontsLoaded]=useState(false)
  if(fontsLoaded){
    return(<Navigator/>);
  }else{
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setfontsLoaded(true)}
      />
      )
  }
}

export default App
