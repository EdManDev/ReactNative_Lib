import React from 'react';
import {Text, View, Button, Image}from "react-native';

export default class FirstScreen extends React.Component{
    static navigatorOptions = {
        tabBarLabel: 'Tab1'
    }
    render(){
        return <view style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }>
            <Text style={{fontSize:30}}>
                This is tab 1
            </Text>
        </view>
    }
 }