import React, { useState } from 'react';
import { View, Text,StyleSheet,Button, Modal, Keyboard } from 'react-native';
import {MaterialIcon, MaterialIcons} from '@expo/vector-icons'
// import style file
import {globalStyles} from '../Style/Style';
import { FlatList, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Card from '../shared/Card';
import ReviewForm from './formik';
 
const Home = ({navigation}) => {
    
    //state 
    const [modalOpen,setmodalOpen]=useState(false)
    const [data,setData]=useState([
        {name:"ali",key:'1',rating:3,body:'lorem ali'},
        {name:'khan',key:'2',rating:2,body:'lorem ali'},
        {name:'shahbaz',key:'3',rating:4,body:'lorem ali'},
        {name:'ladla',key:'4',rating:1,body:'lorem ali'},
        {name:'siddique',key:'5',rating:5,body:'lorem ali'},
        
    ])

    // to control a state through in inputfield
    const addReview=(data)=>{
            data.key=Math.random().toString();
            setData((currentReview)=>{
                return[data,...currentReview]
            })
            setmodalOpen(false)
    }

 return(
    
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType = "slide"> 
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss()}> */}
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={30}
                            style={{...styles.modalToggle,...styles.modalClose}}
                            onPress={()=>setmodalOpen(false)}
                        />
                            {/* input form handle */}
                            <Text style={styles.form}>Input Form Here</Text>
                                <ReviewForm addReview={addReview}/>
                    </View>
                {/* </TouchableWithoutFeedback> */}
            </Modal>
                        <MaterialIcons
                        style={styles.modalToggle}
                            name="add"
                            size={30}
                            onPress={()=>setmodalOpen(true)}
                        />
            <FlatList
                data={data}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.name}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
                />
        </View>
    )
}

const styles=StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    modalClose:{
        marginTop:10,
        marginBottom:0,
        right:-180,
        fontSize:20,
        borderRadius:80
    },
    modalContent:{
        flex:1,
       alignItems:'center'
    },
    form:{
        fontSize:30,
       fontFamily:'nunito-bold',
        color:'green'
    }
})
export default Home
