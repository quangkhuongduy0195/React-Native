import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  TextInput,
  Platform
} from 'react-native';


class Header extends Component {
    render(){
        return(
            <View style={styles.styleHeader}>
              <Text style={styles.styleTextHeader}>
                Color Picker
              </Text>
            </View>
        );
    }
}

class ControlColor extends Component{

  constructor(props){
    super(props)

    this.state = props;

  }

  onValueChange(val){
    this.setState({value : val})

    this.props.onValueChangeControlColor(val);
    // console.log(val);
  }

  render(){
    return(
      <View style={styles.ControlColor}>
          <Text>{this.state.title}</Text>
          <Slider onValueChange={this.onValueChange.bind(this)} step={1} value={this.state.value} maximumValue={255} minimumValue={0} style={styles.Slider}/>
          <TextInput underlineColorAndroid = 'transparent' value={`${this.state.value}`} style={styles.textInput}/>
      </View>
    );
  }
}


export default class AppColorPicker extends React.Component {

  

  onValueChangeControlColor(valueColor){
    console.log("valueColor: "+valueColor);
    this.setState({
      red:valueColor.red,
      blu:valueColor.blu,
      green:valueColor.green
    })
  }


  constructor(props){
    super(props);
    this.state = {
      red: 100,
      green:150,
      blu:200
    };
  }
  render() {
    return (
      <View style={styles.container}>
           {/* header */}
          <Header/>

          {/* Content  */}
          <View style={styles.content}>
            <View style={styles.contentWraper}>
              <View style={styles.controls}>
                <ControlColor title="R" value={this.state.red} onValueChangeControlColor={ (val) => {
                    const currentValue = this.state;
                    const newColorValue = {...currentValue,red: val}

                    this.onValueChangeControlColor(newColorValue)
                  } }/>
                <ControlColor title="G" value={this.state.green} onValueChangeControlColor={ (val) => {
                    const currentValue = this.state;
                    const newColorValue = {...currentValue,green: val}
                    this.onValueChangeControlColor(newColorValue)
                  } }/>
                <ControlColor title="B" value={this.state.blu} onValueChangeControlColor={ (val) => {
                    const currentValue = this.state;
                    const newColorValue = {...currentValue,blu: val}

                    this.onValueChangeControlColor(newColorValue)
                  } }/>
              </View>
              <View style={{ flex: 1,backgroundColor:`rgb(${this.state.red},${this.state.green},${this.state.blu})`, borderRadius: 15, }} ></View>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  styleHeader:{
    height:65,
    backgroundColor: '#ECEFF1',
    alignItems:'center', /* center chieu ngang */
    justifyContent: 'center', /* center chieu doc */
    /* tao shadow ios */
    shadowColor:'grey',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.25,

    /* tao shadow android */
    elevation:2 /* chay tu 0 -> 5 */
  },
  styleTextHeader:{
    fontSize: 18,
    ...Platform.select({
      ios:{
        marginTop: 15,
        color: 'green'
      },
      android:{
        marginTop: 0,
        color: 'red'
      }
    })

  },
  content:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  contentWraper:{
    width: 300,
    height: 350,
    borderColor:'grey',
    borderRadius: 10
  },
  controls:{
    flex: 1,
    backgroundColor:'green',
    borderColor:'grey',
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 2
  },
  preview:{
    flex: 1,
    backgroundColor:'green'
  },
  textInput:{ 
    width:50, 
    height:35, 
    borderColor:'grey', 
    borderWidth:1,
    borderRadius:5,
    textAlign:'center',
    ...Platform.select({

      ios: {

      },
      android:{
        paddingBottom: 7
      }

    })
  },
  ControlColor:{
    flex:1, 
    flexDirection:'row', 
    alignItems:'center', 
    marginLeft:5, 
    marginRight:5
  },
  Slider:{ 
    flex:1, 
    marginLeft:5,
    marginRight:5
  }
  
});