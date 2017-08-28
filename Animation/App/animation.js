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
  

        state = {
            marginTopAni: new Animated.Value(1)
        }
 
        componentDidMount() {
            Animated.spring(                  
              this.state.marginTopAni,        
              {
                toValue: 3,
                bounciness: 10,
                speed: 5,
                useNativeDriver: true
              }
            ).start();                        
        }

    render() {
        const {marginTopAni} = this.state;
        return (
            <View style={styles.container}>
              <Animated.View                 // Special animatable View
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: '#26C6DA',
                    
                    transform: [{scale: marginTopAni}]
                }}
                >
            </Animated.View>
            </View>
          )
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

