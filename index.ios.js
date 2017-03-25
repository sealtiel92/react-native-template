import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Drawer from 'react-native-drawer';
import { Actions, Router, Scene } from 'react-native-router-flux';

import Start from './components/Start'
import Profile from './components/Profile'
import SideMenu from './components/SideMenu'

const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

export default class OnusCliente extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset:100,
      closedDrawerOffset:0,
      acceptTap: true,
      acceptPan: true,
      tapToClose: true,
    };
  }

  render() {
    var menu = <SideMenu closeDrawer={() => {
      this.drawer.close();
    }} changeFrag={this.changeFrag.bind(this)}/>
    return (
      <Drawer
        ref={c => this.drawer = c}
        type='overlay' content={menu}
        styles={drawerStyles} openDrawerOffset={100}
        closedDrawerOffset={0} acceptTap={true}
        acceptPan={true} tapToClose={true}
        >

          <Router>
            <Scene key="root" hideNavBar="true">
              <Scene key="Start" component={Start} title="Start" openDrawer={this.openDrawer.bind(this)} type="replace" initial={true}/>
              <Scene key="Profile" component={Profile} title="Profile" openDrawer={this.openDrawer.bind(this)} type="replace"/>
            </Scene>
          </Router>

      </Drawer>
    );
  }

  changeFrag(id){
    switch(id){
      case 1:
        Actions.Start();
        this.drawer.close();
      break;
      case 2:
        Actions.Profile();
        this.drawer.close();
      break;
    }
  }

  openDrawer(){
    this.drawer.open()
  }

}

AppRegistry.registerComponent('OnusCliente', () => OnusCliente);