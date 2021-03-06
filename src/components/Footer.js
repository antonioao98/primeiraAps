import React, { Component } from 'react'
import {View, Text, StyleSheet } from 'react-native'

class Footer extends Component{
  render(){
    return(
      <View style={style.footer}>
        <Text style={style.text}>Products Bela Vista - 2021</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  footer:{
    backgroundColor: '#606060',
  },
  text:{
    textAlign:"center",
    fontSize: 16,
    margin:16,
    color:"white"
  }
})
export default Footer;