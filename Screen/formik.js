import React from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';
import {Formik} from 'formik';
import {globalStyles} from '../Style/Style';
import { TextInput } from 'react-native-gesture-handler';
import * as yup from 'yup';


const ReviewSchema =yup.object({
    name:yup.string()
         .required()
         .min(4),
    body:yup.string()
         .required()
         .min(8),
    rating:yup.string()
         .required()
         .test('is-num-1-5','Rating must be nubmer',(val)=>{
             return parseInt(val)<6 &&parseInt(val)>0;
         })    
});

 export default ReviewForm = ({props,addReview}) => {
    return (
        <View style={globalStyles.container}> 
            <Formik
                initialValues={{ name: '',body:'',rating:'' }}
                validationSchema={ReviewSchema}
                onSubmit={(values,actions) =>{
                    actions.resetForm();
                    addReview(values)
                //    alert(JSON.stringify(values))
                    }}
             >
                {({ handleChange, handleSubmit,handleBlur, values,errors,touched }) => (
                     <View>
                        <TextInput
                                style={globalStyles.input}
                                placeholder="Review name.."
                                onChangeText={handleChange('name')}
                                value={values.name}
                                onBlur={handleBlur('name')}                        
                            />
                            <Text style={{color:'crimson',textAlign:'center'}}>{touched.name && errors.name}</Text>
                            <TextInput
                                multiline
                                 style={globalStyles.input}
                                placeholder="Review body.."
                                onChangeText={handleChange('body')}
                                value={values.body}  
                                onBlur={handleBlur('body')}                        

                            />
                            <Text style={{color:'crimson',textAlign:'center'}}>{touched.name && errors.body}</Text>

                            <TextInput
                                style={globalStyles.input}
                                placeholder="Rating must be in between (1-5)"
                                onChangeText={handleChange('rating')}
                                keyboardType="numeric"
                                value={values.rating} 
                                onBlur={handleBlur('rating')}                        

                            /> 
                            <Text style={{color:'crimson',textAlign:'center'}}>{touched.name&&errors.rating}</Text>

                            <Button onPress={handleSubmit} title="Submit" />
                    </View>
                 )}
            </Formik>
        </View>
    )
}
