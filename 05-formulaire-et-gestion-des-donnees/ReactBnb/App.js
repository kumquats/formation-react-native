import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import configureStore from './src/store';
import { Provider } from 'react-redux'; // connexion store <-> composants

import {MainNavigator} from './src/containers/Navigator';

const store = configureStore(); // On crée le store

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Provider store={store}>
					<MainNavigator />
				</Provider>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
