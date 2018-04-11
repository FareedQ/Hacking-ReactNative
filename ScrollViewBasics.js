import React, { Component } from 'react';
import {
  
	} from 'react-native';

class ScrollViewBasics extends Component {
  render() {
  
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
      return (
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Text style={{fontSize:96}}>If you like</Text>
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Text style={{fontSize:96}}>What's the best</Text>
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}