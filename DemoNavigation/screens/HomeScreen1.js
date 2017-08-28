import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

export default class HomeScreen1 extends Component {

    static navigationOptions = {
        title:'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../icon/home.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    nextDetails = () =>{
        const {navigate} = this.props.navigation;
        navigate('HomeScreen', {name:'React Native'});
    }

    render() {
        return (
        <View style={styles.container}>
            <Button title='Details' onPress={this.nextDetails}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2DFDB',
  }, 
  icon: {
      width: 25,
      height: 25
  }
});