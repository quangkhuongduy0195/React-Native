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
                toValue: 19,                   
                duration: 2500,
                delay: 5000,
                speed: 1,
                easing: Easing.bounce 
              }
            ).start();                        
        }

    render() {
        const {marginTopAni} = this.state;
        return (
            <View style={styles.container}>
              <Animated.View                 // Special animatable View
                style={{
                    marginTop: -50,
                    marginLeft: -50,
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
    // justifyContent: 'center',
    // alignItems: 'center',
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

