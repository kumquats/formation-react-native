import React from 'react';
import { View, Text, Input, Button, TextInput, StyleSheet, DatePickerAndroid, Keyboard } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { fetchHousings } from '../actions/housings';

const CityInput = props => {
	const { input, ...inputProps } = props;
    return <TextInput
                placeholder="Ville"
                style={styles.input}
				onChangeText={input.onChange}
				value={input.value}
                {...inputProps} />;
}

const DateInput = props => {
	const { input, ...inputProps } = props;
	debugger;
    return <TextInput
                placeholder={inputProps.placeholder}
                onFocus={() => {
                    Keyboard.dismiss();
                    DatePickerAndroid.open({
                        date: props.input.value instanceof Date ? props.input.value : new Date()
                    }).then( ({ action, year, month, day}) => {
                        if (action !== DatePickerAndroid.dismissedAction) {
                            input.onChange( new Date( Date.UTC(year, month, day) ) );
                        }
                    });
                }}
                style={styles.input}
                {...inputProps}
                value={props.input.value && props.input.value.toDateString()}
            />;
}

function submit( navigation ) {
    return function( values, dispatch ) {
        dispatch(fetchHousings()).then( () => {
            navigation.navigate('list')
        } )
    }
}

class SearchForm extends React.Component {
    static navigationOptions = {
        title: 'Recherche'
    };

    render() {
        return (
            <View style={styles.container}>
                <Field
                    name="city"
                    component={CityInput}
                />
                <Field
                    name="minDate"
                    placeholder="Date mini"
                    component={DateInput}
                    />
                <Field
                    name="maxDate"
                    placeholder="Date maxi"
                    component={DateInput}
                />
                <Button title="Rechercher" onPress={ this.props.handleSubmit( submit( this.props.navigation ) ) }/>
            </View>
        );
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

export default reduxForm( { form: 'search', destroyOnUnmount: false })( SearchForm );