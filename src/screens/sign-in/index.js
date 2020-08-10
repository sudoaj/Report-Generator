import * as React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  ActivityIndicator,
} from "react-native";
import { loginUser } from "../../config/store/auth/action";
import { Actions } from "react-native-router-flux";

class SignIn extends React.Component {
  state = {
    loading: false,
    loggedIn: false,
    email: "Aj@aj.com",
    password: "aj2020",
  };
  handleSignIn = () => {
    this.setState({
      loading: true,
    });
    this.props.loginUser(this.state.email, this.state.password, () => {
      Actions.Menu();
      this.setState({
        loading: false,
      });
    });
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.logo}>NEW SEC</Text>

          <View style={styles.inputView}>
            <TextInput
              value={this.state.email}
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              value={this.state.password}
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.handleSignIn()}
          >
            {this.state.loading && <ActivityIndicator size="small" />}
            {!this.state.loading && <Text style={styles.loginText}>LOGIN</Text>}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
          <Text style={styles.terms}>
            By using our mobile app, you agree to our {}
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL("http://example.com")}
            >
              terms and condition policy
            </Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#2ed397",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#2ed397",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#2ed397",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  forgot: {
    color: "black",
    fontSize: 11,
  },
  terms: {
    marginTop: 150,
    color: "black",
    fontSize: 11,
  },
  loginText: {
    alignItems: "center",
    textAlign: "center",
    color: "black",
    fontSize: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    theToken: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password, callback) =>
      dispatch(loginUser(username, password, callback)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
