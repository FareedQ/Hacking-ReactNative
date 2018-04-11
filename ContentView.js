import React, { Component } from 'react';
import {
  	StyleSheet, 
	TouchableHighlight, 
	View, 
	Text,  
	} from 'react-native';
	
	
export default class ContentView extends React.Component {
    
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
  
    return (
      <View style={styles.contentView}>
      	<TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.loginScreenButton}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        {/* <FetchExample /> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  contentView: {
   flex: 1,
   paddingTop:60,
  },
  loginScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
});