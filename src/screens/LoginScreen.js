import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

class LoginScreen extends React.Component {
  state = {
    email: 'kuronomagi2@gmail.com',
    password: 'tasogare',
  }

  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log('success!', user);
        // old navigation
        // this.props.navigation.navigate('Home');

        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(() => {
      });
  }

  handlePress() {
    this.props.navigation.navigate('Signup');
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
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none" // 入力文字の一番はじめを大文字にする機能を無効
          autoCorrect={false} // テキストの自動補正を無効にする（texttなど）
          placeholder="Password"
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <TouchableHighlight style={styles.button} title="送信" onPress={this.handleSubmit.bind(this)} underlayColor="#c70f66">
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
          <Text style={styles.signupText}>メンバー登録する</Text>
        </TouchableOpacity>
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
  signup: {
    marginTop: 16,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
  },
});

export default LoginScreen;