import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class GoogleMap extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        dangerZone: {} // google map object
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <View>
                <Text> google map component </Text>
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
