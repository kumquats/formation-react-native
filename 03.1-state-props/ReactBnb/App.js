import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ReactBnB
        </Text>
        <View>
          <Text>Maison entière - 3 lits</Text>
          <Text>Havre de paix en bord de mer</Text>
          <Text>Note: 5/5</Text>
        </View>
        <View>
          <Text>Chambre - 1 lit double</Text>
          <Text>Appartement proche du centre ville</Text>
          <Text>Note: 3/5</Text>
        </View>
        <View>
          <Text>Chambre - 1 lit simple</Text>
          <Text>Maison proche des transports</Text>
          <Text>Note: 1/5</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});