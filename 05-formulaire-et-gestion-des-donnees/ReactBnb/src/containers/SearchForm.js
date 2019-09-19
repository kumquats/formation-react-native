import React from 'react';
import { View, Text } from 'react-native';

export default class SearchForm extends React.Component {
    static navigationOptions = {
        title: 'Recherche'
    };
    
    render() {
        return (
            <View>
                <Text>Bienvenue dans le formulaire de recherche !</Text>
            </View>
        )
    }
}

