import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { reduxForm, Field, change } from 'redux-form';
import { fetchHousings, createHousing } from '../actions/housings';

const Input = props => {
    const { input, ...inputProps } = props;
    return <TextInput
                 style={styles.input}
                onChangeText={input.onChange}
                value={input.value}
                {...inputProps} />;
}

function submit( navigation )
{
    return function( values, dispatch ) {
        dispatch( createHousing( values ) );
        navigation.goBack();
    }
}

class CreateForm extends React.Component {
    static navigationOptions = {
        title: 'Création'
    };

    render() {
        return (
            <View style={styles.container}>
                <Field
                    name="place"
                    placeholder="Lieu"
                    component={Input}
                />
                <Button title="Géolocaliser" onPress={() => this.geolocate()}/>
                <Field
                    name="description"
                    placeholder="Description"
                    numberOfLines={5}
                    component={Input}
                    />
                <Field
                    name="price"
                    placeholder="Prix"
                    keyboardType="numeric"
                    component={Input}
                />
                <Button title="Créer" onPress={ this.props.handleSubmit( submit( this.props.navigation ) ) }/>
            </View>
        );
    }

    geolocate() {
        this.props.dispatch( change( 'create', 'place', 'Recherche position GPS...' ) );
        navigator.geolocation.getCurrentPosition( ( event ) => {
			this.props.dispatch( change( 'create', 'place', `Recherche ville à ${event.coords.latitude},${event.coords.longitude}` ) );
            fetch( `https://geocode.xyz/${event.coords.latitude},${event.coords.longitude}?json=1` )
                .then(response => response.json())
                .then( responseJson => {
                    this.props.dispatch( change( 'create', 'place', responseJson.city ) );
                } )
        }, null, {timeout: 10000} );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
	input: {
        marginTop: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 3
	}
});

export default reduxForm( { form: 'create' })( CreateForm );