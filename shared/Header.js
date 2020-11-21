import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons';
import { Dimensions } from 'react-native';



export default Header=({navigation,title})=>{

    const openMenu=()=>{
            navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
        <MaterialIcons name="menu" size={35} onPress={openMenu} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>

    )
}

const styles=StyleSheet.create({
    header:{
        width:Dimensions.get('screen').width,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',  
        
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
    },
    icon:{
        position:'absolute',
        left:-10
    }
})