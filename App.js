import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Alerter from './Alerter.js'
import Map from './Map.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

  }
  state = {
    alert: false,
    diffInKm: null,
    fixedCoords: {
      lat: 51.6064577,
      lon: 4.7783964
    },
    treshold: 0.02
  }

  componentDidUpdate() {
    setInterval(() => {
      if (this.state.diffInKm >= this.state.treshold) {
        this.setState({
          alert: true
        });
      } else {
        this.setState({
          alert: false
        })
      }
    },5000)
    
  }
    
  setDiff = (diffInKm) => {
    this.setState({diffInKm: diffInKm});
  }

  render () {

    let text = 'awaiting location...';
    if (this.state.diffInKm) {
      
      text = JSON.stringify(this.state.diffInKm);
    }
    return (
      <View style={styles.container}>
        
        <Map getDiffInKm={this.setDiff} coords={this.state.fixedCoords}/>
        <Alerter alert={this.state.alert}></Alerter>
        <Text>{text}</Text>
        <Button onPress={() => { 
         
          this.setState({
          alert: !this.state.alert
        }) }} title="vibrate">Vibrate</Button>
        
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
