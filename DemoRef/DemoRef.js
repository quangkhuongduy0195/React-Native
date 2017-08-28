import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

export default class DemoRef extends Component {


  buttonClick = ()=>{
    const txt = this.refs.txtInput.text;
    alert(txt);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          ref='txtInput'
          style={{height: 40 , width: 150, borderColor: 'gray', borderWidth: 1, borderRadius: 5}}
        />
        <Button title='Click' onPress={this.buttonClick}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});