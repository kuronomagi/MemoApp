import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  // eslint-disable-next-line
  handleSubmit(){

    // this.props.navigation.navigate('Home')

    // Log in!!
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }} // この書き方で、関数を書かなくて良い（textとpasswordが違うだけのものが複数あったり）
          autoCapitalize="none" // 入力文字の一番はじめを大文字にする機能を無効
          autoCorrect={false} // テキストの自動補正を無効にする（texttなど）
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none" // 入力文字の一番はじめを大文字にする機能を無効
          autoCorrect={false} // テキストの自動補正を無効にする（texttなど）
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight style={styles.button} title="送信" onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#e31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginScreen;