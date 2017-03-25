import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class Start extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#00adff'}}>
            <Left>
                <Button transparent onPress={()=>this.props.openDrawer()}>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>{this.props.title}</Title>
            </Body>
            <Right />
        </Header>
        <Content style={{}}>
          <Text style={{alignSelf:'center'}}>
            Soy Start
          </Text>
        </Content>
    </Container>
    )
  }
}
