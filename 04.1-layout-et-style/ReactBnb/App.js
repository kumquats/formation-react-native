import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Navigator from './src/containers/Navigator';
// import HousingList from './src/containers/HousingList';
// import HousingDetail from './src/containers/HousingDetail';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
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
  }
});
