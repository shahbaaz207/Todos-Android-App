import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

// import style file
import {globalStyles} from '../Style/Style';

const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
        </View>
    )
}

export default About

