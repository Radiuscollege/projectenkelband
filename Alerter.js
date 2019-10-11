import React from 'react';
import { StyleSheet, View, Text, Vibration} from 'react-native';
import { Audio } from 'expo-av';

// const soundObject = new Audio.Sound();
export default class Alerter extends React.Component {
    constructor(props) {
        super(props)
   
    }

    componentDidUpdate() {
        if(this.props.alert) {
            this.alert();
        } else {
            this.stopAlert();
        }
    }

    vibrate() {
        Vibration.vibrate(2000);
    }

    
    async sound() {
        
        try {
            // await soundObject.loadAsync(require('./assets/sound.mp3'));
            // await soundObject.playAsync();
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    }

    alert() {
        this.vibrate();
        this.sound();
    }

    stopAlert() {
        Vibration.cancel();
        try {
            soundObject.stopAsync();
            soundObject.unloadAsync();
        } catch(e) {

        }
    
    }


    render() {
        const changed = this.props.alert ? 'alerted' : 'no alert';
        return (<View><Text> {changed} </Text></View>)
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
