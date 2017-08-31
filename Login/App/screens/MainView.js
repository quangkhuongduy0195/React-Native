
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,

} from 'react-native';
import Header from '../component/Header';
import { connect } from 'react-redux';



class MainView extends Component {

  static navigationOptions = {
    title: 'MainView',
    headerLeft: null,
    header: null,
    gesturesEnabled: false
  };


  render() {
    console.log('mainview', this.props);
    return (
      <View style={{flex: 1,}} >
        <Header style={{ height: 64 }} {...this.props} />
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Main View
          </Text>
        </View>

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
export default connect(
  // state => {
  //   console.log('state',state);
  //   return{

  //   }
  // },
  // dispatch => {
  //   console.log('dispatch',dispatch);
  //   return{
      
  //   }
  // }
)(MainView);


