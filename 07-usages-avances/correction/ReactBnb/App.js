import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux'; // connexion store <-> composants
import configureStore from './src/store';

import Main from './src/containers/Main';

const store = configureStore(); // On crée le store

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Main />
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
