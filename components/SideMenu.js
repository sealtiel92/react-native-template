import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:"white"}}>
        <Text style={{fontSize:40}}>
          Menu
        </Text>
        <Text style={{margin:5,fontSize:30}} onPress={()=>this.props.changeFrag(1)}>
          Inicio
        </Text>
        <Text style={{margin:5,fontSize:30}} onPress={()=>this.props.changeFrag(2)}>
          Profile
        </Text>
      </View>
    )
  }
}
