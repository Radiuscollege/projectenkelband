import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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

        // this.getLocationAsync();
        setInterval(() => {
            this.getLocationAsync();
        }, 1000);
    }

    componentDidUpdate() {

    }

    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    async getLocationAsync()  {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage : 'Permission to access location was denied'
            })
        }
        let location = await Location.getCurrentPositionAsync({});
        let diffInKm = this.getDistanceFromLatLonInKm(location.coords.latitude, location.coords.longitude, this.props.coords.lat, this.props.coords.lon)
        
        this.props.getDiffInKm(diffInKm); 
    }

    render() {
        return (
        <View>
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
