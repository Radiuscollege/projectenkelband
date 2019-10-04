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
    location: null
  }
    
  setLocation = (location) => {
    this.setState({location: location});
  }

  render () {

    let text = 'awaiting location...';
    if (this.state.location) {
      console.log(this.state.location.coords);
      text = JSON.stringify(this.state.location);
    }
    return (
      <View style={styles.container}>
        <Map getLocation={this.setLocation}/>
        <Alerter alert={this.state.alert}></Alerter>
        <Text>{text}</Text>
        <Button onPress={() => { 
          console.log(this.state.location);
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
