import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ProgressBarAndroid,
  ProgressViewIOS,
  View,
  Text,
  Platform
} from 'react-native';




export default class MyProgressBar extends Component {


    getProgress(offset) {//当this.state.progress发生变化时，就会执行此方法，再更新视图
        var progress = 10 + offset;
        return Math.sin(progress % Math.PI) % 1;
      }

    render() {
    if(Platform.OS === 'ios'){
        return (
            <View style={{ width:500,backgroundColor:'red'}}>
              <ProgressViewIOS style={styles.progressView} progress={this.getProgress(0)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={this.getProgress(0.2)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="red" progress={this.getProgress(0.4)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={this.getProgress(0.6)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={this.getProgress(0.8)}/>
            </View>
        );
    }
    if(Platform.OS === 'android'){
        return(
            <View>
                <ProgressBarAndroid  progress={this.props.progress} />
            </View>
        );
    }
        
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