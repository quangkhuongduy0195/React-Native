/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

export default class Animation extends Component {


  // constructor(props){
  //   super(props);
  state = {
    marginTopAni: new Animated.Value(0)
  }
  // }

  componentDidMount() {
    Animated.timing(
      this.state.marginTopAni,
      {
        toValue: 2,
        duration: 2500,
      }
    ).start();
  }

  render() {
    const { marginTopAni } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: '#26C6DA',
            marginTop: marginTopAni.interpolate({
              inputRange: [0, 0.5, 1, 1.45, 2],
              outputRange: [0, 500, 100, 250, 500]
            }),
            transform: [{
              scale: marginTopAni.interpolate({
                inputRange: [0, 0.5, 1, 1.45, 2],
                outputRange: [0, 1, 0.5, 0.2, 1]
              })
            }]
          }}>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
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

