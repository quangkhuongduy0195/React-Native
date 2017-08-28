/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FlexBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width:100, height:100, backgroundColor: 'yellow'}}></View>
        <View style={{ width:100, height:100, backgroundColor: 'red'}}></View>
        <View style={{ width:100, height:100, backgroundColor: 'grey'}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems:'center'
  }
});

AppRegistry.registerComponent('FlexBox', () => FlexBox);
