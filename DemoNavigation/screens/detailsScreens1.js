import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button, 
  Image
} from 'react-native';

export default class detailsScreens1 extends Component {
  

  static navigationOptions = {
    title:'Details',
    tabBarLabel: 'Details',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../icon/details.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

    render() {
        return (
        <View style={styles.container}>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1F5FE',
  }, 
  icon: {
      width: 25,
      height: 25
  }
});