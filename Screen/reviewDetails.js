import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native';

// import style file
import {globalStyles,images} from '../Style/Style';
import Card from '../shared/Card';

const reviewDetails = ({navigation}) => {
    const rating=navigation.getParam('rating')
    return (
        <View style={globalStyles.container}>
            <Card>
                    <Text style={styles.review}>Review Field:</Text>
                <Text style={styles.reviewInput}>{navigation.getParam('name')}</Text>
                <Text style={styles.review}>Body Field:</Text>
                <Text style={styles.reviewInput}>{navigation.getParam('body')}</Text>
                    <View style={styles.rating}>
                        <Text>Game Zone Rating:<Text style={styles.star}>{images.ratings[rating]}</Text></Text>
                        {/* <Image source={images.ratings[rating]}/> */}
                    </View>
            </Card>
        </View>
    )
}

const styles=StyleSheet.create({
    review:{
        fontWeight:'bold',
        padding:3,
        alignSelf:'center',
        borderRadius:10,
        textAlign:'center',
        backgroundColor:'grey',
        width:100,
        margin:10
    },
    reviewInput:{
        alignSelf:'center',
        color:'green',


    },
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:'#eee'
    },
   
    star:{
         fontSize:30,
    }
})
export default reviewDetails
