import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import About from "../Screen/About";
import Header from '../shared/Header';
import React from 'react';
const screens={
  About:{
      screen:About,
      navigationOptions:({navigation})=>{
        return{
       headerTitle:()=><Header navigation={navigation} title="About GameZone"/>,
        }
     }
  },
}

const  AboutStack=createStackNavigator(screens);

export default AboutStack