import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.MemoEditInput} multiline value="Hi" />
        <CircleButton onPress={() => { this.props.navigation.goBack(); }}>
          {'\uf00c'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  MemoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;