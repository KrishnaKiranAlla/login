import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/user";
import Input from "../../components/Input";
import Button from "../../components/Button";

class Login extends Component {
  state = {
    accountId: "",
    pswd: "",
    errorMessage: "",
  };

  async componentDidMount() {
    const { user } = this.props;
    if (user !== null) {
      await this.props.history.push("/user-details");
    }
  }

  async handleChange(e, type) {
    await this.setState({
      [type]: e,
    });
  }

  async handleClick() {
    await this.props.loginUser(this.state);
    const { user } = await this.props;
    if (user !== null) {
      if (user.token.length > 15) {
        await this.props.history.push("/user-details");
      } else {
        await this.setState({
          errorMessage: user.token,
        });
      }
    } else {
      await this.setState({
        errorMessage: "Invalid credentials",
      });
    }
  }

  render() {
    const { accountId, pswd, errorMessage } = this.state;
    return (
      <div className="login-container">
        <Input
          placeholder="Enter username"
          label="UserName"
          onChange={(e) => this.handleChange(e, "accountId")}
        />
        <Input
          type="password"
          placeholder="Enter password"
          label="Password"
          onChange={(e) => this.handleChange(e, "pswd")}
        />
        {errorMessage.length > 0 && (
          <p style={{ color: "red" }}>{errorMessage}</p>
        )}
        <Button
          onClick={() => this.handleClick()}
          // disabled={!accountId.length > 0 || !pswd.length > 0}
        >
          Login
        </Button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user,
  }),
  {
    loginUser,
  }
)(Login);
