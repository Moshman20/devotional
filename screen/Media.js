import React, { Component } from 'react';
import { Container,Button, Icon,Title, Header, Content, Tab, Tabs,Item,Label,Input } from 'native-base';
import { ActivityIndicator,StyleSheet, TouchableOpacity,Text, View} from 'react-native';
  

  


export default class Media extends Component {



constructor(props) {
      super(props);
        this.state = {
   
       
      }
    }


    
  render() {  
 
   const { goBack } = this.props.navigation;  
    
    return (
      <View style={styles.container}>
                     <View style={styles.header}>
                                  <TouchableOpacity style={styles.navigate}
                                onPress={() => goBack()}>
                                    <Icon active name='md-arrow-back' style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.title} > 
                                   Media
                                </Text>
                                
                        </View>
                        <View style={styles.body}>
                              
                       </View>
                   
                        
    
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f5f5f5',
  },
  icon:{
    color:'white',
    },
    navigate:{
    
      marginTop:50,
      marginLeft:30,
   },
   header:{
       flex:1,
       backgroundColor:'brown',

      },
   body:{
      flex:3,
  },
  title:{
      marginLeft:30,
      fontSize:40,
      color:'white',
      marginBottom:15,
      marginTop:15,
  },
      white:{
          color:'#c2cbd0',
          fontWeight:'500'
      },
 
});




