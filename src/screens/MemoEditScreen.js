import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';


const dateString = (date) => {
  // if (date == null) { return ''; }
  const str = date.toISOString();
  return str.split('T')[0];
};
class MemoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }

  componentWillMount() {
    // console.log(this.props.navigation.state.params);
    // console.log(this.props.navigation.state.params.body);

    /* movie  old
      const { params } = this.props.navigation.state;
      this.setState({
        body: params.memo.body,
        key: params.memo.key,
      });
    */

    const { params } = this.props.navigation.state;
    this.setState({
      body: params.body,
      key: params.key,
    });
  }

  handlePress() {
    // console.log('pressed');

    const { currentUser } = firebase.auth(); // firebaseから情報を抜き取る
    const db = firebase.firestore();
    const newDate = new Date();

    // console.log(this.state);

    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        body: this.state.body,
        createdON: newDate,
      })
      .then(() => {
        const { navigation } = this.props;
        navigation.state.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          createdON: newDate,
        });
        navigation.goBack();
      })
      .catch(() => {
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.MemoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
          underlineColorAndroid="transparent"
          textAlignVertical="top"
        />
        <CircleButton onPress={this.handlePress.bind(this)}>
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