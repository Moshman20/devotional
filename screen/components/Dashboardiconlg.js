import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,TouchableOpacity  } from 'react-native';


export default class Dashboardicon extends Component {
     
    constructor(props) {
        super(props);
      }
      
    
  render() {  
    return (
            <Image style={styles.btn} source={require('../assets/odm.png')}/>
    );
  }
}

const styles = StyleSheet.create({
    btn:{
      
      width:150,
      height:150,
      alignSelf:'center'
    

    }
});




