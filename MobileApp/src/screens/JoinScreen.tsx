import React from 'react'
import { View, Button, TextInput, Image } from 'react-native'

const JoinScreen  = () =>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./../assets/chat-icon.png')}/>
        <TextInput placeholder="Enter username" />
        <Button title="Join Chat" /> 
    </View>

export default JoinScreen