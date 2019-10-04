import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Map extends React.Component {
    

    constructor(props) {
        super(props)
    
    }

    state = {
        errorMessage: null,
        location: null
    }

    componentDidMount() {
        console.log('component mounted');
        this.getLocationAsync();
    }

    componentDidUpdate() {

    }


    async getLocationAsync()  {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage : 'Permission to access location was denied'
            })
        }
        let location = await Location.getCurrentPositionAsync({});
       
        this.setState({location: location});
        this.props.getLocation(location); 
    }

    render() {
          return (<View>
              <Text> map component </Text>
              </View>)
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
