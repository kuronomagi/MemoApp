import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  // 表示される前の処理（load時） マウント（表示）される前に動作するもの 「ライフサイクルメソッド」と呼ぶ
  componentWillMount() {
    // 参照
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .get()
      .then((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          console.log(doc.data()); // データが見れる
          memoList.push(doc.data());
        });
        this.setState({ memoList }); // 一時的なmemoListの中身をstateのmemoListにいれる reactは「memoList: memoList」を「memoList」のショートハンドでかける
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf067'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffdf6',
  },
});

export default MemoListScreen;