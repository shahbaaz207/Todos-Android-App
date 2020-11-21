import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Card=(props)=>{
    return(
        <View style={styles.card}>
             <View style={styles.cardContent}>
                 {props.children}
             </View>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        borderRadius:8,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:5,
        marginVertical:6

    },
    cardContent:{
        marginVertical:20,
        marginHorizontal:16
    }
})