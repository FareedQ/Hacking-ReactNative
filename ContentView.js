'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList, 
  TouchableHighlight, 
  Image,
} from 'react-native';
import hello from './hello';

export default class ContentView extends Component<{}> {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  
  componentDidMount(){
    return fetch('https://genesis-online.herokuapp.com/cards')
      .then((response) => response.json())
      .then((responseJson) => {
        var compiledData = []
        for (var i=1; i <= Object.keys(responseJson).length; i++) {
        	compiledData.push(responseJson[i.toString()]);
    	} 
        this.setState({
          isLoading: false,
          dataSource: compiledData,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
    }

	_navigateToNextPage = () => {
	    this.props.navigator.push({title: 'Results', component: hello, passProps: {}});
	};
	
	_renderItem = ({item, index}) => (
		<ListItem item={item} index={index} onPressItem={this._navigateToNextPage} />
	);
  
	_onPressItem = (index) => {
		console.log("Pressed row: "+index);
	};

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, backgroundColor:'green'}}>
        	<Text>Now Loading</Text>
        </View>
      )
    }
    
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
  		 <FlatList
          data={this.state.dataSource}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
      </View>
    );
  }
}

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  render() {
    const item = this.props.item;
    return (
        <View>
          <View style={styles.rowContainer}>
          	<Image source={{uri:item.picture}} style={{width: 78, height: 110}}/>
            <TouchableHighlight onPress={this._onPress} underlayColor='#dddddd' style={styles.buttonContainer}>
              <Text style={styles.title}
                numberOfLines={1}>{item.name}</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.separator}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex:1,
   paddingTop: 60,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  buttonContainer: {
  	backgroundColor: 'green',
  	flex: 1,
  	margin: 10,
  	padding: 20,
  	alignItems: 'center',
  	borderRadius:10,
    borderWidth: 1,
    borderColor: '#656565',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  
});
