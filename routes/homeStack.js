import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
import Home from '../Screen/Home';
import ReviewDetails from '../Screen/reviewDetails';
import Header from '../shared/Header';
import React from 'react';
const screens={
  Home:{
      screen:Home,
      navigationOptions:({navigation})=>{
         return{
        headerTitle:()=><Header navigation={navigation} title="GameZone"
        />,
         }
      } 
  },
  ReviewDetails:{
    screen:ReviewDetails
  }, 
}

const  HomeStack=createStackNavigator(screens,{
  headerTintColor:'#444',
  headerStyle:{backgroundColor:'#eee',height:60}
});

export default HomeStack