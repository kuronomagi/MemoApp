import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';


const dateString = (date) => {
  if (date == null) { return ''; }
  const str = date.toISOString();
  return str.split('T')[0];
};
class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  // 次の画面で変更した内容をmemoに渡して画面を更新する
  returnMemo(memo) {
    this.setState({ memo });
  }

  // substring(0, 10) = 0~10文字めを表示
  render() {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View style={styles.memeHeaderContent}>
              <Text style={styles.memoHeaderTitle}>{memo.body ? memo.body.substring(0, 10) : ''}</Text>
              <Text style={styles.memoHeaderDeta}>{dateString(memo.createdON)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>

        <CircleButton
          color="white"
          style={styles.editButton}
          // this.returnMemo.bind(this) は特殊な書き方
          onPress={() => { this.props.navigation.navigate('MemoEdit', { ...memo, returnMemo: this.returnMemo.bind(this) }); }}
        >
          {'\uf040'}
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
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    // color: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDeta: {
    fontSize: 12,
    color: '#fff',
  },
  memoBody: {
    lineHeight: 20,
    fontSize: 15,
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    flex: 1,
  },
  editButton: {
    top: 34,
  },
});

export default MemoDetailScreen;