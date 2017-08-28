import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  FlatList,
  Text,
  Picker,
  Switch
} from 'react-native';




export default class MyRefreshControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
        };
      }
    
      _onRefresh() {
        this.setState({refreshing: true});
        fetchData().then(() => {
          this.setState({refreshing: false});
        });
      }

    render() {
    
        return (
            <Switch
                value='asd'
            />
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
    progressView: {
        marginTop: 20,
        height: 20
      }
})